<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcuType extends Model
{
    protected $table = 'pcu_types';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Set relation tables.
     */

    public function parts()
    {
        return $this->hasMany(PcuTypePart::class);
    }

    public function pcus()
    {
        return $this->belongsToMany(Pcu::class, 'pcu_type')
            ->withPivot(['content'])
            ->withTimestamps();
    }
}
