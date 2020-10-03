<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    use ClientQueryScope;

    protected $table = 'packs';

    protected $_relations = ['user:id,name', 'packer:id,name'];
    protected $_details = ['packagers', 'packagers.package'];
    protected $_counts = ['packagers'];

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

    // public function packages()
    // {
    //     return $this->hasManyDeep(Package::class, Packager::class);
    // }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
