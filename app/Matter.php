<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Matter extends Model
{
    use ClientQueryScope;

    protected $table = 'matters';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $aRelatedQuery = [];

    /**
     * Accessors
     */
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    /**
     * Set relation tables.
     */

    public function materials()
    {
        return $this->hasMany(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
