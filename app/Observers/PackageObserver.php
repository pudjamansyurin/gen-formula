<?php

namespace App\Observers;

use App\Package;

class PackageObserver
{
    /**
     * Handle the package "saved" event.
     *
     * @param  \App\Package  $package
     * @return void
     */
    public function saved(Package $package)
    {
        // sync packager
        $package->syncPackager(request('packers'));
        // update total price
        $package->updateRev();
    }
}
