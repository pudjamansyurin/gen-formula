<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    protected $table = 'packs';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'packer_id',
        'user_id'
    ];

    /**
     * Set relation tables.
     */

    public function packer()
    {
        return $this->belongsTo(Packer::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
