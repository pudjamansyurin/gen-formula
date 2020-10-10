<?php

namespace App;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Routines\FormulaRoutine;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Model;

class Formula extends Model
{
    use ClientQueryScope, ExtendedScope;
    use FormulaRoutine;

    protected $table = 'formulas';

    protected $_relations = ['user:id,name', 'rev'];
    protected $_details = ['revs', 'revs.user:id,name', 'recipes', 'recipes.recipeable', 'recipes.recipeable.rev'];
    protected $_counts = ['revs', 'recipes'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        // 'description',
        'main',
        'shrink',
        'density',
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
            'user.name' => 'user_id',
            // 'rev.price' => 'rev.price'
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

    public function materialRecipes()
    {
        return $this->morphedByMany(Material::class, 'recipeable')
            ->withPivot(['portion'])
            ->withTimestamps();
    }

    public function formulaRecipes()
    {
        return $this->morphedByMany(self::class, 'recipeable')
            ->withPivot(['portion'])
            ->withTimestamps();
    }
    public function children()
    {
        return $this->morphedByMany(self::class, 'recipeable')
            ->with('children');
    }

    public function parents()
    {
        return $this->morphToMany(self::class, 'recipeable')
            ->with('parents');
    }

    public function sales()
    {
        return $this->belongsToMany(Sale::class, 'products')
            ->withPivot(['package_id', 'ratio'])
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Custom local scopes
     */
    public function scopeGetAsProductList()
    {
        return $this->with('rev')->whereMain('1')->get();
    }

    public function scopeGetAsRecipeList()
    {
        return $this->with('rev')->whereMain('0')->get()
            ->map(function ($formula) {
                $result = [];

                $result['recipeable_id'] = $formula->id;
                $result['recipeable_type'] = get_class($formula);
                $result['name'] = $formula->name;
                $result['price'] = $formula->rev->price;

                return $result;
            });
    }
}
