<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $table = 'packages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'unit_id',
        'capacity',
        'user_id'
    ];

    /**
     * Set relation tables.
     */
    public function units()
    {
        return $this->belongsTo(Unit::class);
    }

    public function stories()
    {
        return $this->hasMany(PackageStory::class);
    }

    public function packagers()
    {
        return $this->hasMany(Packager::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}