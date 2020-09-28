<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackageRev extends Model
{
    protected $table = 'package_revs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_id',
        'price',
        'user_id'
    ];

    /**
     * Set relation tables.
     */

    public function packages()
    {
        return $this->belongsTo(Package::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
