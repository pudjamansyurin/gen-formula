<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sale_id',
        'package_id',
        'formula_id',
        'ratio',
    ];

    /**
     * Set relation tables.
     */

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function formula()
    {
        return $this->belongsTo(Formula::class);
    }
}
