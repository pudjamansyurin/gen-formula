<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portion extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'formula_id',
        'material_id',
        'portion',
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

    /**
     * Get the associated table.
     */
    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
