<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use ClientQueryScope;

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
     * Client query scope
     */
    protected $aRelatedQuery = [
        'filter' => [
            'user.name',
            'unit.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
            'unit.symbol' => 'unit_id'
        ]
    ];

    /**
     * Set relation tables.
     */
    public function unit()
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
