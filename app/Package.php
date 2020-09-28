<?php

namespace App;

use App\Traits\ClientQueryScope;
use App\Traits\PackageRoutine;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use ClientQueryScope, PackageRoutine;

    protected $table = 'packages';

    protected $_relations = ['user:id,name', 'unit', 'rev'];
    protected $_details = ['revs', 'packagers', 'packagers.packets', 'packagers.packer:id,name'];
    protected $_counts = ['revs', 'packagers'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'unit_id',
        'capacity',
        'user_id'
    ];

    /**
     * Client query scope
     */
    protected $clientQuery = [
        'filter' => [
            'user.name',
            'unit.name'
        ],
        'sorter' =>  [
            'user.name' => 'user_id',
            'unit.symbol' => 'unit_id'
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
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function revs()
    {
        return $this->hasMany(PackageRev::class)->latest('updated_at');
    }

    public function rev()
    {
        return $this->hasOne(PackageRev::class)->latest('updated_at');
    }

    public function packagers()
    {
        return $this->hasMany(Packager::class);
    }

    public function packers()
    {
        return $this->belongsToMany(Packer::class, 'packagers')
            ->withPivot(['content'])
            ->withTimestamps();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
