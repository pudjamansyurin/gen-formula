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
        if ($packerId = request('packer_id')) {
            if ($pack->getOriginal('packer_id') != $packerId) {
                $this->updatePackageRev($pack);
            }
        }
    }

    /**
     * Local routines
     */
    private function updatePackageRev($pack)
    {
        $pack->load(['packagers', 'packagers.package']);

        $pack->packagers->each(function ($packager) {
            $packager->package->updateRev();
        });
    }
}
