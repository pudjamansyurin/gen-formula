<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\User;

class Role extends Model
{
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
