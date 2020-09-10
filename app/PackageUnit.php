<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackageUnit extends Model
{
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

    public function packages()
    {
        return $this->hasMany(Package::class);
    }
}
