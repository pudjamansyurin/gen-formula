<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcuUnit extends Model
{
    protected $table = 'pcu_units';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'symbol',
    ];

    /**
     * Set relation tables.
     */

    public function pcus()
    {
        return $this->hasMany(Pcu::class);
    }
}
