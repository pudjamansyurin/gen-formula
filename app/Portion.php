<?php

namespace App;

use App\Traits\ClientQueryScope;
use Illuminate\Database\Eloquent\Model;

class Portion extends Model
{
    use ClientQueryScope;

    protected $table = 'portions';

    protected $_relations = ['user:id,name', 'portions.material.revs'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'formula_id',
        'material_id',
        'portion',
        'user_id'
    ];

    /**
     * Get the associated table.
     */
    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
