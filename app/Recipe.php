<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $table = "recipeables";


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'formula_id',
        'portion',
        'depth',
        'recipeable_id',
        'recipeable_type'
    ];


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
