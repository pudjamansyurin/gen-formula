<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialStory extends Model
{
    protected $table = 'material_stories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'material_id',
        'price',
        'user_id'
    ];

    // /**
    //  * Client query scope
    //  */
    // protected $aQuery = [
    //     'filter' => [
    //         'material.name',
    //         'user.name'
    //     ],
    //     'sorter' =>  [
    //         'material.name' => 'material_id',
    //         'user.name' => 'user_id'
    //     ]
    // ];

    /**
     * Get the associated table.
     */
    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
