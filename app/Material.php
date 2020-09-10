<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use ClientQueryScope;

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
    protected $aQuery = [
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

    public function formulas()
    {
        return $this->hasManyThrough(Formula::class, Portion::class);
        // return $this->belongsToMany(Formula::class, 'formula_material');
    }

    public function prices()
    {
        return $this->hasMany(Price::class)->orderBy('changed_at', 'desc');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
