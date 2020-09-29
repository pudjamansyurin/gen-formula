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
        if ($packers = request('_packers')) {
            $package->syncPackager($packers);
        }
        // update total price
        $package->updateRev();
    }
}
