<?php

namespace App;

use App\Traits\RequestQueryBuilder;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use RequestQueryBuilder;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    protected $with = ['user'];

    /**
     * Custom fields
     */
    protected $aQuery = [
        'filter' => [
            'user' => [
                'name' => 'user.name'
            ]
        ],
        'sorter' =>  [
            'user.name' => 'user_id'
        ]
    ];

    /**
     * Set relation tables.
     */
    public function productPrices()
    {
        return $this->hasMany(Price::class);
    }

    public function formulaProducts()
    {
        return $this->hasMany(FormulaProduct::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
