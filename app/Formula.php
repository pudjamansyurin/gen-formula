<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    /**
     * Get the associated table.
     */
    public function formulaPrices()
    {
        return $this->hasMany(FormulaPrice::class);
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
