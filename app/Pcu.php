<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pcu extends Model
{
    protected $table = 'pcus';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'unit_id',
        'capacity',
        'user_id'
    ];

    /**
     * Set relation tables.
     */
    public function units()
    {
        return $this->belongsTo(PcuUnit::class);
    }

    public function histories()
    {
        return $this->hasMany(PcuHistory::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function types()
    {
        return $this->belongsToMany(PcuType::class, 'pcu_type')
            ->withPivot(['content'])
            ->withTimestamps();
    }

    public function parts()
    {
        return $this->belongsToMany(PcuTypePart::class, 'pcu_part')
            // ->using(PcuPartPivot::class)
            ->withPivot(['price'])
            ->withTimestamps();
    }
}
