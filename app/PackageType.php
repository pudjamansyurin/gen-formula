<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackageType extends Model
{
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
    public function packages()
    {
        return $this->belongsToMany(Package::class, 'package_type')
            ->withTimestamps();
    }

    public function parts()
    {
        return $this->belongsToMany(PackageTypePart::class, 'package_type_part')
            ->withTimestamps();
    }

    public function the_parts()
    {
        return $this->hasMany(PackageTypePart::class);
    }
}
