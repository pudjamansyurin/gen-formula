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

        // FIXME: update related recipes (not creating)
    }
}
