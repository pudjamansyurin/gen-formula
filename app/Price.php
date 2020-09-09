<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use ClientQueryScope;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'material_id',
        'price',
        'changed_at',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $aQuery = [
        'filter' => [
            'material.name',
            'user.name'
        ],
        'sorter' =>  [
            'material.name' => 'material_id',
            'user.name' => 'user_id'
        ]
    ];

    /**
     * Get the associated table.
     */
    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
