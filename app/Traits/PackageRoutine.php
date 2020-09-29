<?php

namespace App\Traits;

trait PackageRoutine
{
    /**
     * Custom methods
     */
    public function updatePackager($packers)
    {
        // sync packagers
        $packagers = [];
        foreach ($packers as $packer) {
            $packagers[$packer['id']] = ['content' => $packer['content']];
        }
        $this->packers()->sync($packagers);

        // sync packets
        foreach ($packers as $packer) {
            $packets = [];
            foreach ($packer['packs'] as $pack) {
                $packets[$pack['id']] = ['price' => $pack['price']];
            }
            $this->packagers()
                ->firstWhere('packer_id', $packer['id'])
                ->packets()
                ->sync($packets);
        }

        return $this;
    }

    public function updateRev()
    {
        $this->load(['revs']);

        // calculate total price
        $totalPrice = $this->calcRev();

        // reject if total price is same
        if ($rev = $this->revs->first()) {
            if (round($rev->price, 2) == round($totalPrice, 2)) {
                return $this;
            }
        }

        // create revs
        $this->revs()->create([
            'price' => $totalPrice,
            'user_id' => auth()->id()
        ]);

        return $this;
    }

    public function calcRev()
    {
        $this->load(['packagers', 'packagers.packets']);

        // calculate total price
        return $this->packagers
            ->reduce(function ($carry, $packager) {
                $price = $packager->packets
                    ->reduce(function ($carry, $packet) {
                        return $carry + $packet->pivot->price;
                    }, 0) / $packager->content;

                return $carry + $price;
            }, 0);
    }
}
