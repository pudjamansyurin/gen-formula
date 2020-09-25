<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Matter extends Model
{
    use ClientQueryScope;

    protected $table = 'matters';

    protected $_relations = ['user:id,name'];
    protected $_details = ['materials'];
    protected $_counts = ['materials'];

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
    protected $clientQuery = [
        'filter' => [
            'user.name',
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
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

    public function materials()
    {
        return $this->hasMany(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
