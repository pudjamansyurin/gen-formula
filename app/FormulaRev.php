<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FormulaRev extends Model
{
    protected $table = 'formula_revs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'formula_id',
        'price',
        'user_id'
    ];

    /**
     * Set relation tables.
     */

    public function formulas()
    {
        return $this->belongsTo(Formula::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
