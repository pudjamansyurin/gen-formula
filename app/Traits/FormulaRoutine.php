<?php

namespace App\Traits;

trait FormulaRoutine
{
    /**
     * Custom methods
     */

    public function calcRev()
    {
        $this->load(['recipes', 'recipes.recipeable']);

        // calculate total price
        return $this->recipes
            ->reduce(function ($carry, $recipe) {
                $price = $recipe->recipeable->rev->price;

                return $carry + ($recipe->portion * $price / 100);
            }, 0);
    }
}
