<?php

namespace App;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Model;

class Matter extends Model
{
    use ClientQueryScope, ExtendedScope;

    protected $table = 'matters';

    protected $client_relations = ['user:id,name'];
    protected $client_details = ['materials'];
    protected $client_counts = ['materials'];

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
