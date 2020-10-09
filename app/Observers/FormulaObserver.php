<?php

namespace App\Observers;

use App\Formula;

class FormulaObserver
{
    /**
     * Handle the formula "saved" event.
     *
     * @param  \App\Formula  $formula
     * @return void
     */
    public function saved(Formula $formula)
    {
        // update packager
        if ($recipes = request('_recipes')) {
            $formula->updateRecipe($recipes);
        }
        // update total price
        $formula->updateRev();

        // event:updated
        if ($updated = $formula->getOriginal('id')) {
            // dispatch(function () use ($formula) {
            $this->updateSaleRev($formula);
            $this->updateParentRecipe($formula);
            // })->afterResponse();
        }
    }

    /**
     * Local routines
     */

    private function updateParentRecipe($formula)
    {
        $formula->load('parents');

        $formula->parents->each(function ($parent) {
            // $parent->updateRev();
            // $this->updateSaleRev($parent);
            $parent->save();

            // if ($parent->parents) {
            //     $this->updateParentRecipe($parent);
            // }
        });
    }

    private function updateSaleRev($formula)
    {
        $formula->load(['sales']);

        $formula->sales->each(function ($sale) {
            // $sale->updateRev();
            $sale->save();
        });
    }
}
