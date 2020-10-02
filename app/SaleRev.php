<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SaleRev extends Model
{
    protected $table = 'sale_revs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sale_id',
        'price',
        'user_id'
    ];

    /**
     * Set relation tables.
     */

    public function sales()
    {
        return $this->belongsTo(Sale::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
