<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use ClientQueryScope;

    protected $table = 'materials';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'matter_id',
        'user_id',
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

    /**
     * Set relation tables.
     */

    public function matter()
    {
        return $this->belongsTo(Matter::class);
    }

    public function stories()
    {
        return $this->hasMany(MaterialStory::class)->latest();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }



    // public function portions()
    // {
    //     return $this->hasMany(Portion::class);
    // }

    // public function formulas()
    // {
    //     return $this->hasManyThrough(Formula::class, Portion::class);
    //     // return $this->belongsToMany(Formula::class, 'formula_material');
    // }
}
