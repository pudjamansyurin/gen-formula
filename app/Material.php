<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use ClientQueryScope;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    // protected $with = ['user:id,name', 'prices'];

    /**
     * Client query scope
     */
    protected $aQuery = [
        'filter' => [
            'user.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id'
        ]
    ];

    /**
     * Accessors
     */
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    public function getDescriptionAttribute($value)
    {
        return ucfirst($value);
    }


    /**
     * Set relation tables.
     */
    public function prices()
    {
        return $this->hasMany(Price::class)->orderBy('changed_at', 'desc');
    }

    public function portions()
    {
        return $this->hasMany(Portion::class);
    }

    public function formulas()
    {
        return $this->hasManyThrough(Formula::class, Portion::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
