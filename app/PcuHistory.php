<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PcuHistory extends Model
{
    protected $table = 'pcu_histories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'pcu_id',
        'total_price',
    ];

    /**
     * Set relation tables.
     */

    public function pcus()
    {
        return $this->hasMany(Pcu::class);
    }
}
