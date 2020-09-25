<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use ClientQueryScope;

    protected $table = 'materials';

    protected $_relations = ['user:id,name', 'matter:id,name'];
    protected $_details = ['revs', 'revs.user:id,name'];
    protected $_counts = ['revs'];

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
