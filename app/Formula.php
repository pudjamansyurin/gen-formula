<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    use ClientQueryScope;

    protected $table = 'formulas';

    protected $relations = ['user:id,name', 'portions.material.revs'];
    protected $counts = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $clientQuery = [
        'filter' => [
            'user.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id'
        ]
    ];

    /**
     * Accessors
     */
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    public function getDescriptionAttribute($value)
    {
        return ucfirst($value);
    }

    /**
     * Set relation tables.
     */
    public function portions()
    {
        return $this->hasMany(Portion::class);
    }

    public function materials()
    {
        return $this->hasManyThrough(Material::class, Portion::class);
        // return $this->belongsToMany(Material::class, 'formula_material');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
