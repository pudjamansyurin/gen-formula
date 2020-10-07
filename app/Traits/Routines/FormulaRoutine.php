<?php

namespace App\Traits\Routines;

use App\Formula;
use App\Material;

trait FormulaRoutine
{
    /**
     * Custom methods
     */

    public function updateRecipe($recipes)
    {
        // sync recipes
        $materialRecipes = [];
        $formulaRecipes = [];

        foreach ($recipes as $recipe) {
            $id = $recipe['recipeable_id'];
            $type = $recipe['recipeable_type'];

            switch ($type) {
                case Material::class:
                    $materialRecipes[$id] = [
                        'portion' => $recipe['portion'],
                        'depth' => 0
                    ];
                    break;

                case get_class($this):
                    [$children, $depth] = $this->getRecipe('children', $id);

                    $formulaRecipes[$id] = [
                        'portion' => $recipe['portion'],
                        'depth' => $depth
                    ];
                    break;

                default:
                    break;
            }
        }

        // update based on recipe types
        $this->materialRecipes()->sync($materialRecipes);
        $this->formulaRecipes()->sync($formulaRecipes);
    }

    public function updateRev()
    {
        $this->load(['revs']);

        // calculate total price
        [$price, $priceLiter] = $this->calcRev();

        // reject if total price is same
        if ($rev = $this->revs->first()) {
            if (
                round($rev->price) == round($price) &&
                round($rev->price_liter) == round($priceLiter)
            ) {
                return $this;
            }
        }

        // create revs
        $this->revs()->create([
            'price' => $price,
            'price_liter' => $priceLiter,
            'user_id' => auth()->id() ?? $this->user_id
        ]);

        return $this;
    }

    public function calcRev()
    {
        $this->load(['recipes', 'recipes.recipeable',  'recipes.recipeable.rev']);

        // calculate total portion
        $portionTotal = $this->recipes
            ->reduce(function ($carry, $recipe) {
                return $carry + $recipe->portion;
            }, 0);

        // calculate total price
        $priceTotal = $this->recipes
            ->reduce(function ($carry, $recipe) {
                $price = $recipe->recipeable->rev->price;

                return $carry + ($price * $recipe->portion);
            }, 0);

        // calc RMC / 100 Kg
        $rmc = $priceTotal / $portionTotal;
        // calc RMCS / (KG or L)
        $rmcs = ($rmc * 100) / (100 - $this->shrink);
        $rmcsLiter = $this->density * $rmcs;

        return [$rmcs, $rmcsLiter];
    }

    public function getRecipe($type, $id = null)
    {
        if ($id) {
            $formula = Formula::with($type)->find($id);
        } else if ($this->exists()) {
            $formula = $this->load($type);
        }

        // bad arguments
        if (!$formula) {
            return [];
        }

        $item = json_decode(json_encode($formula));
        $recipes = $this->getRecursive($type, $item->{$type});
        // $flatten = $this->getFlatRecursive($type, $item->{$type});
        $maxDepth = $this->maxRecursiveDepth($recipes) / 2;

        return [$recipes, $maxDepth];
    }

    public function getRecursive($type, $items)
    {
        return array_reduce($items, function ($carry, $item) use ($type, &$flattenId) {
            $carry[] = [
                'id' => $item->id,
                'name' => $item->name,
                'main' => $item->main,
                $type => $this->getRecursive($type, $item->{$type}),
            ];

            return $carry;
        }, []);
    }

    public function getFlatRecursive($type, $items)
    {
        $flatten = [];

        // array_walk_recursive($items, function ($item, $key) use (&$flatten) {
        //     if (!in_array($item->id, $flatten)) {
        //         $flatten[] = $item->id;
        //     }
        // });

        foreach ($items as $item) {
            if (!in_array($item->id, $flatten)) {
                $flatten[] = $item->id;
            }
            if (is_array($item)) {
                $max = $this->getFlatRecursive($type, $item);
            }
        }

        return $flatten;

        // return array_reduce($items, function ($carry, $item) use ($type) {
        //     if (!in_array($item->id, $carry)) {
        //         $carry[] = $item->id;
        //     }

        //     $carry[] = [
        //         'id' => $item->id,
        //         'name' => $item->name,
        //         'main' => $item->main,
        //         $type => $this->getFlatRecursive($type, $item->{$type}),
        //     ];

        //     return $carry;
        // }, []);
    }

    public function maxRecursiveDepth($arr, $n = 0)
    {
        $max = $n;
        foreach ($arr as $item) {
            if (is_array($item)) {
                $max = max($max, $this->maxRecursiveDepth($item, $n + 1));
            }
        }
        return $max;
    }
}
