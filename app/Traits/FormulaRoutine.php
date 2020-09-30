<?php

namespace App\Traits;

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
            $portion = ['portion' => $recipe['portion']];
            $id = $recipe['recipeable_id'];

            switch ($recipe['recipeable_type']) {
                case Material::class:
                    $materialRecipes[$id] = $portion;
                    break;
                case Formula::class:
                    $formulaRecipes[$id] = $portion;
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
        [$priceKilogram, $priceLiter] = $this->calcRev();

        // reject if total price is same
        if ($rev = $this->revs->first()) {
            if (round($rev->price_kilogram, 2) == round($priceKilogram, 2)) {
                return $this;
            }
        }

        // create revs
        $this->revs()->create([
            'price_kilogram' => $priceKilogram,
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
        $rmcTotal = $priceTotal / $portionTotal;
        // calc RMCS / (KG or L)
        if ($this->shrink < 100) {
            $rmcsKilogram = ($rmcTotal * 100) / (100 - $this->shrink);
        } else {
            $rmcsKilogram = 0;
        }
        $rmcsLiter = $this->density * $rmcsKilogram;

        return [$rmcsKilogram, $rmcsLiter];
    }
}
