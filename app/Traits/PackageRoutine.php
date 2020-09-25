<?php

namespace App\Traits;

trait PackageRoutine
{
    /**
     * Custom methods
     */
    public function syncPackager($packers)
    {
        $packers_id = [];
        foreach ($packers as $packer) {
            // update or create: packager
            array_push($packers_id, $packer['id']);
            $packager = $this->packagers()
                ->updateOrCreate(
                    ['packer_id' => $packer['id']],
                    ['content' => $packer['content']]
                );

            // sync packets
            $packs = [];
            foreach ($packer['packs'] as $pack) {
                $packs[$pack['id']] = ['price' => $pack['price']];
            }
            $packager->packets()
                ->sync($packs);
        }
        // delete: packager (un-used)
        $this->packagers()
            ->whereNotIn('packer_id', $packers_id)
            ->delete();

        return $this;
    }

    public function updateRev()
    {
        $this->load(['packagers', 'packagers.packets', 'revs']);

        // calculate total price
        $totalPrice = $this->packagers
            ->reduce(function ($carry, $packager) {
                $price = $packager->packets
                    ->reduce(function ($carry, $packet) {
                        return $carry + $packet->pivot->price;
                    }, 0) / $packager->content;

                return $carry + $price;
            }, 0);

        // reject if total price is same
        if ($rev = $this->revs->first()) {
            if (round($rev->price, 2) == round($totalPrice, 2)) {
                return $this;
            }
        }
        debug($rev->price);
        debug($totalPrice);

        // create revs
        $this->revs()->create([
            'price' => $totalPrice
        ]);

        return $this;
    }
}
