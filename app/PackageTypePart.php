<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackageTypePart extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'package_type_id',
    ];

    /**
     * Set relation tables.
     */

    public function types()
    {
        return $this->belongsToMany(PackageType::class, 'package_type_part')
            ->withTimestamps();
    }

    public function type()
    {
        return $this->belongsTo(PackageType::class);
    }
}
