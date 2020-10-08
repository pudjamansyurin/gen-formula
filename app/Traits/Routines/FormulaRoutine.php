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
            $data = [
                'portion' => $recipe['portion'],
            ];

            switch ($type) {
                case Material::class:
                    $materialRecipes[$id] = $data;
                    break;

                case get_class($this):
                    $formulaRecipes[$id] = $data;
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

    public static function getRecipe($type, $id)
    {
        $formula = Formula::with($type)->find($id);

        $flatten = [];
        $item = json_decode(json_encode($formula));
        $recipes = self::getRecursive($type, $item->{$type}, $flatten);
        // $maxDepth = self::maxRecursiveDepth($recipes) / 2;

        return (object) [
            'list' => $recipes,
            'flatten' => $flatten,
            // 'depth' => $maxDepth
        ];
    }

    public static function getRecursive($type, $items, &$flatten)
    {
        return array_reduce($items, function ($carry, $item) use ($type, &$flatten) {
            if (!in_array($item->id, $flatten)) {
                $flatten[] = $item->id;
            }

            $carry[] = [
                'id' => $item->id,
                'name' => $item->name,
                'main' => $item->main,
                $type => self::getRecursive($type, $item->{$type}, $flatten),
            ];

            return $carry;
        }, []);
    }

    // public static function maxRecursiveDepth($arr, $n = 0)
    // {
    //     $max = $n;
    //     foreach ($arr as $item) {
    //         if (is_array($item)) {
    //             $max = max($max, self::maxRecursiveDepth($item, $n + 1));
    //         }
    //     }
    //     return $max;
    // }
}
