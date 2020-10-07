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
            // FIXME: update related recipes (not creating)

            // FIXME: update related sale (not creating)
        }
    }
}
