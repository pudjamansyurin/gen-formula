<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormulaPrice extends Model
{
    /**
     * Get the associated table.
     */
    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }

    public function user()
    {
    	return $this->belongsTo(User::class);
    }
}
