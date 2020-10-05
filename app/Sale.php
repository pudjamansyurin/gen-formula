<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use ClientQueryScope;

    protected $table = 'sales';

    protected $_relations = ['user:id,name', 'rev'];
    protected $_details = ['revs', 'revs.user:id,name'];
    protected $_counts = ['revs',];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        // 'filled',
        'user_id',
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

    public function revs()
    {
        return $this->hasMany(SaleRev::class)->latest('updated_at');
    }

    public function rev()
    {
        return $this->hasOne(SaleRev::class)->latest('updated_at');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
