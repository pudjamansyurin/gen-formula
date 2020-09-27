<?php

namespace App\Observers;

use App\Pack;

class PackObserver
{
    /**
     * Handle the pack "updating" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function updating(Pack $pack)
    {
        //
        // debug($pack->packagers()->with('package'));
    }

    /**
     * Handle the pack "deleting" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function deleting(Pack $pack)
    {
        //
    }
}
