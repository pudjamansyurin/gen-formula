<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
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
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * Set relation tables.
     */
    public function productPrices()
    {
        return $this->hasMany(Price::class);
    }

    public function formulaProducts()
    {
        return $this->hasMany(FormulaProduct::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
