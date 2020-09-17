<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Packer extends Model
{
    use ClientQueryScope;

    protected $table = 'packers';

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
    protected $aRelatedQuery = [
        'filter' => [
            'user.name',
            'pack.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
        ]
    ];

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
