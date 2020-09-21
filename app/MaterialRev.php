<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialRev extends Model
{
    protected $table = 'material_revs';

    protected $relations = ['material', 'material.revs'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'material_id',
        'price',
        // 'updated_at',
        'user_id'
    ];

    // /**
    //  * Client query scope
    //  */
    // protected $clientQuery = [
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

    /**
     * Custom query scopes
     */
    public function scopeGetById($q, $id)
    {
        return $this->with($this->relations)
            ->find($id);
    }
}
