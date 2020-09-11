<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PackageStory extends Model
{
    protected $table = 'package_stories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_id',
        'total_price',
    ];

    /**
     * Set relation tables.
     */

    public function packages()
    {
        return $this->belongsTo(Package::class);
    }
}
