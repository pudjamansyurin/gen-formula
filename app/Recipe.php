<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $table = "recipeables";

    /**
     * Get the owning recipeable model.
     */
    public function recipeable()
    {
        return $this->morphTo();
    }

    /**
     * Get the associated table.
     */
    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }
}
