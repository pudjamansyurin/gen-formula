<?php

namespace App;

use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    use ClientQueryScope, ExtendedScope;

    protected $table = 'packs';

    protected $client_relations = ['user:id,name', 'packer:id,name'];
    protected $client_details = ['packagers', 'packagers.package'];
    protected $client_counts = ['packagers'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'packer_id',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $clientQuery = [
        'filter' => [
            'user.name',
            'packer.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
            'packer.name' => 'packer_id'
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

    public function packer()
    {
        return $this->belongsTo(Packer::class);
    }

    public function packagers()
    {
        return $this->belongsToMany(Packager::class, 'packets');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
