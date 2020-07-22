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
        'product_id',
        'price',
        'changed_at',
        'user_id'
    ];

    /**
     * The relationships that should always be loaded.
     *
     * @var array
     */
    // protected $with = ['user:id,name', 'product:id,name'];

    /**
     * Client query scope
     */
    protected $aQuery = [
        'filter' => [
            'product.name',
            'user.name'
        ],
        'sorter' =>  [
            'product.name' => 'product_id',
            'user.name' => 'user_id'
        ]
    ];

    /**
     * Get the associated table.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
