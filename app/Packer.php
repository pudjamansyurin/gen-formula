<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Packer extends Model
{
    protected $table = 'packers';

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

    public function packs()
    {
        return $this->hasMany(Pack::class);
    }
}
