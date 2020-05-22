<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * Get the associated table.
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
