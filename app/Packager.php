<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Packager extends Model
{
    protected $table = 'packagers';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_id',
        'packer_id',
        'content',
    ];

    /**
     * Set relation tables.
     */

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function packets()
    {
        return $this->belongsToMany(Pack::class, 'packager_pack')
            ->withPivot(['price'])
            ->withTimestamps();
    }
}
