<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class PcuPartPivot extends Pivot
{
    public $incrementing = true;

    /**
     * Set relation tables.
     */

    public function pcus()
    {
        return $this->belongsTo(Pcu::class);
    }

    public function parts()
    {
        return $this->belongsTo(PcuTypePart::class);
    }

    public function type()
    {
        return $this->hasOneThrough(PcuType::class, PcuTypePart::class);
    }
}
