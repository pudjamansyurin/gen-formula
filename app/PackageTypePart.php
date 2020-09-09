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
}
