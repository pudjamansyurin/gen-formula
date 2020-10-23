<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MaterialRev extends Model
{
    protected $table = 'material_revs';

    protected $client_relations = ['material', 'material.revs'];

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
