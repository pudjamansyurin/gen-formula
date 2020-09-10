<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcuTypePart extends Model
{
    protected $table = 'pcu_type_parts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'pcu_type_id',
    ];

    /**
     * Set relation tables.
     */

    public function type()
    {
        return $this->belongsTo(PcuType::class);
    }

    public function pcus()
    {
        return $this->belongsToMany(Pcu::class, 'pcu_part')
            // ->using(PcuPartPivot::class)
            ->withPivot(['price'])
            ->withTimestamps();
    }
}
