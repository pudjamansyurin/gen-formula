<?php

namespace App\Traits;

use App\Formula;
use App\Material;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

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
                    // $this->getParents($id);
                    [$children, $depth] = $this->getChildren($id);

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
                round($rev->price, 2) == round($price, 2) &&
                round($rev->price_liter, 2) == round($priceLiter, 2)
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

    private function getChildren($id)
    {
        $formula = Formula::with('children')->find($id);
        $item = json_decode(json_encode($formula));

        $children = $this->getRecursiveChildren([$item]);
        $maxDepth = $this->maxRecursiveDepth($children) / 2;

        // debug($formula->name . ' : Children');
        // debug($children);

        return [$children, $maxDepth];
    }

    private function getParents($id)
    {
        $formula = Formula::with('parents')->find($id);
        $item = json_decode(json_encode($formula));

        debug($formula->name . ' : Parents');
        debug($item);
    }

    private function getRecursiveChildren($items)
    {
        $data = [];
        foreach ($items as $item) {
            $data[] = [
                'name' => $item->name,
                'main' => $item->main,
                'children' => $this->getRecursiveChildren($item->children),
            ];
        }
        return $data;
    }

    private function maxRecursiveDepth($arr, $n = 0)
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
