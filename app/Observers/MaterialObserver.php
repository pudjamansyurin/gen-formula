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
        $material->updateRev(request('revs_price'));
    }
}
