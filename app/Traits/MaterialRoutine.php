<?php

namespace App\Traits;

use App\MaterialRev;
use Illuminate\Support\Facades\Gate;

trait MaterialRoutine
{
    /**
     * Custom methods
     */
    public function updateRev($price)
    {
        // ignore if same
        if ($rev = $this->revs()->first()) {
            if (round($rev->price, 2) == round($price, 2)) {
                return $this;
            }
        }
        // check priviledges
        // Gate::authorize('create', MaterialRev::class);
        // add more prices
        $this->revs()->create([
            'price' => $price,
            'user_id' => auth()->id()
        ]);

        return $this;
    }
}
