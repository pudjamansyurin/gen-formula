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
        // update packager
        if ($packers = request('_packers')) {
            $package->updatePackager($packers);
        }
        // update total price
        $package->updateRev();

        // event:updated
        if ($updated = $package->getOriginal('id')) {
            $this->updateSaleRev($package);
        }
    }

    /**
     * Local routines
     */
    private function updateSaleRev($package)
    {
        $package->load(['sales']);

        $package->sales->each(function ($sale) {
            $sale->updateRev();
        });
    }
}
