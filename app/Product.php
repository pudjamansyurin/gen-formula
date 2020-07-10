<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
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
    protected $with = ['user:id,name'];

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
        return $this->hasMany(ProductPrice::class);
    }

    public function percents()
    {
        return $this->hasMany(FormulaPercent::class);
    }

    public function formulas()
    {
        return $this->hasManyThrough(Formula::class, FormulaPercent::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
