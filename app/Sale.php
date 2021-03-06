<?php

namespace App;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Routines\SaleRoutine;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use ClientQueryScope, ExtendedScope;
    use SaleRoutine;

    protected $table = 'sales';

    protected $client_relations = ['user:id,name', 'rev'];
    protected $client_details = ['revs', 'revs.user:id,name', 'products', 'products.formula', 'products.formula.rev', 'products.package', 'products.package.unit', 'products.package.rev'];
    protected $client_counts = ['revs', 'products'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'filled',
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

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function formulas()
    {
        return $this->belongsToMany(Formula::class, 'products')
            ->withPivot(['package_id', 'ratio'])
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
