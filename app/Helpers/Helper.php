<?php

namespace App\Helpers;

use App\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Helper
{
    // public static function passedRole($name)
    // {
    //     if (Auth::check())
    //     {
    //         $role = DB::table('roles')->where('name', $name)->first();
    //         return Auth::user()->role->priority <= $role->priority;
    //     }
    //     return false;
    // }
}
