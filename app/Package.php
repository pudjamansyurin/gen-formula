<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use ClientQueryScope;

    protected $table = 'packages';

    protected $relations = ['user:id,name', 'unit'];
    protected $details = ['revs', 'packagers', 'packagers.packets', 'packagers.packer:id,name'];
    protected $counts = ['revs', 'packagers'];

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
     * Set relation tables.
     */
    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function revs()
    {
        return $this->hasMany(PackageRev::class);
    }

    public function packagers()
    {
        return $this->hasMany(Packager::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
