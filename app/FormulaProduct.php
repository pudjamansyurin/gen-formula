<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormulaProduct extends Model
{
    /**
     * Get the associated table.
     */
    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
