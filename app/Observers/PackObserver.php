<?php

namespace App\Observers;

use App\Pack;
use App\Package;

class PackObserver
{
    /**
     * Handle the pack "saved" event.
     *
     * @param  \App\Pack  $pack
     * @return void
     */
    public function saved(Pack $pack)
    {
        // event:updated
        if ($updated = $pack->getOriginal('id')) {
            if ($packerId = request('packer_id')) {
                if ($pack->getOriginal('packer_id') != $packerId) {
                    $this->updatePackageRev($pack);
                }
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
            // $packager->package->updateRev();
            $packager->package->save();
        });
    }
}
