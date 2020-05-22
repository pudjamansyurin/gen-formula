<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductPrice extends Model
{
    /**
     * Get the associated table.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
