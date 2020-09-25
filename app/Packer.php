<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Packer extends Model
{
    use ClientQueryScope;

    protected $table = 'packers';

    protected $_relations = ['user:id,name'];
    protected $_details = ['packs'];
    protected $_counts = ['packs'];

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
            'user.name'
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
    public function packs()
    {
        return $this->hasMany(Pack::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
