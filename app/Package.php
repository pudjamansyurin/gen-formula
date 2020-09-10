<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        // 'description',
        'unit_id',
        'capacity',
        'user_id'
    ];

    /**
     * Set relation tables.
     */
    public function units()
    {
        return $this->belongsTo(PackageUnit::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function types()
    {
        return $this->belongsToMany(PackageType::class, 'package_type')
            ->withTimestamps();
    }
}
