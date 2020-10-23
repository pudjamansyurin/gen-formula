<?php

namespace App;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Model;

class Packer extends Model
{
    use ClientQueryScope, ExtendedScope;

    protected $table = 'packers';

    protected $client_relations = ['user:id,name'];
    protected $client_details = ['packs'];
    protected $client_counts = ['packs'];

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

    public function packages()
    {
        return $this->belongsToMany(Package::class, 'packagers');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Custom local scopes
     */
    public function scopeGetAsListWithPacks()
    {
        return $this->with('packs:id,name,packer_id')->get();
    }
}
