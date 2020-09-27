<?php

namespace App\Observers;

use App\Package;
use App\Packer;

class PackerObserver
{
    /**
     * Handle the packer "deleted" event.
     *
     * @param  \App\Packer  $packer
     * @return void
     */
    public function deleted(Packer $packer)
    {
        Package::all()->each(function ($package) {
            $package->updateRev();
        });
    }
}
