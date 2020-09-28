<?php

namespace App;

use App\Traits\ClientQueryScope;
use App\Traits\FormulaRoutine;
use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    use ClientQueryScope, FormulaRoutine;

    protected $table = 'formulas';

    protected $_relations = ['user:id,name', 'rev'];
    protected $_details = ['revs', 'recipes', 'recipes.recipeable', 'recipes.recipeable.rev'];
    protected $_counts = ['revs', 'recipes'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        // 'description',
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
    // public function portions()
    // {
    //     return $this->hasMany(Portion::class);
    // }

    // public function materials()
    // {
    //     return $this->hasManyThrough(Material::class, Portion::class);
    // }


    public function revs()
    {
        return $this->hasMany(FormulaRev::class)->latest('updated_at');
    }

    public function rev()
    {
        return $this->hasOne(FormulaRev::class)->latest('updated_at');
    }

    public function recipes()
    {
        return $this->hasMany(Recipe::class);
    }

    public function asRecipes()
    {
        return $this->morphMany(Recipe::class, 'recipeable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
