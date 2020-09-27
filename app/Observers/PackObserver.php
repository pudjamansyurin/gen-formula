<?php

namespace App\Observers;

use App\Pack;
use App\Package;

class PackObserver
{
    /**
     * Handle the pack "updated" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function updated(Pack $pack)
    {
        $this->updatePackageRev();
    }

    /**
     * Handle the pack "deleted" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function deleted(Pack $pack)
    {
        $this->updatePackageRev();
    }

    /**
     * Local routines
     */
    private function updatePackageRev()
    {
        Package::all()->each(function ($package) {
            $package->updateRev();
        });
    }
}
