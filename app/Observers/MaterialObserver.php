<?php

namespace App\Observers;

use App\Material;

class MaterialObserver
{
    /**
     * Handle the material "saved" event.
     *
     * @param  \App\Material  $material
     * @return void
     */
    public function saved(Material $material)
    {
        // update revs
        if ($revPrice = request('rev.price')) {
            $material->updateRev($revPrice);
        }

        // event:updated
        if ($updated = $material->getOriginal('id')) {
            // dispatch(function () use ($material) {
            $this->updateFormulaRev($material);
            // })->afterResponse();
        }
    }

    /**
     * Local routines
     */
    private function updateFormulaRev($material)
    {
        $material->load(['formulas']);

        $material->formulas->each(function ($formula) {
            // $formula->updateRev();
            $formula->save();
        });
    }
}
