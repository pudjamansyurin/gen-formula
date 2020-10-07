<?php

namespace App\Traits\Routines;

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
            if (round($rev->price) == round($price)) {
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
