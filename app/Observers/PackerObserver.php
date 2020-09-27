<?php

namespace App\Observers;

use App\Packer;

class PackerObserver
{
    /**
     * Handle the pack "updating" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function updating(Packer $packer)
    {
        //
        debug($packer->packages);
    }

    /**
     * Handle the packer "deleting" event.
     *
     * @param  \App\Packer  $packer
     * @return void
     */
    public function deleting(Packer $packer)
    {
        //
    }
}
