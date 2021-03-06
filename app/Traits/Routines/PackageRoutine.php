<?php

namespace App\Traits\Routines;

trait PackageRoutine
{
    /**
     * Custom methods
     */
    public function updatePackager($packers)
    {
        // sync packagers
        $packagers = array_reduce($packers, function ($carry, $packer) {
            $carry[$packer['id']] = ['content' => $packer['content']];

            return $carry;
        }, []);

        $this->packers()->sync($packagers);

        // sync packets
        foreach ($packers as $packer) {
            $packets = array_reduce($packer['packs'], function ($carry, $pack) {
                $carry[$pack['id']] = ['price' => $pack['price']];

                return $carry;
            }, []);

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
            if (round($rev->price) == round($totalPrice)) {
                return $this;
            }
        }

        // create revs
        $this->revs()->create([
            'price' => $totalPrice,
            'user_id' => auth()->id() ?? $this->user_id
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
