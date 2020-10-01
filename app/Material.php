<?php

namespace App;

use App\Traits\ClientQueryScope;
use App\Traits\MaterialRoutine;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use ClientQueryScope, MaterialRoutine;

    protected $table = 'materials';

    protected $_relations = ['user:id,name', 'matter:id,name', 'rev'];
    protected $_details = ['revs', 'revs.user:id,name'];
    protected $_counts = ['revs', 'formulas'];

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
    protected $clientQuery = [
        'filter' => [
            'user.name',
            'matter.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
            'matter.name' => 'matter_id'
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

    public function revs()
    {
        return $this->hasMany(MaterialRev::class)->latest('updated_at');
    }

    public function rev()
    {
        return $this->hasOne(MaterialRev::class)->latest('updated_at');
    }

    public function formulas()
    {
        return $this->morphToMany(Formula::class, 'recipeable');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Custom local scopes
     */
    public function scopeGetAsRecipeList()
    {
        return $this->with('rev')->get()
            ->map(function ($material) {
                $result = [];

                $result['recipeable_id'] = $material->id;
                $result['recipeable_type'] = get_class($material);
                $result['name'] = $material->name;
                $result['price'] = $material->rev->price;

                return $result;
            });
    }
}
