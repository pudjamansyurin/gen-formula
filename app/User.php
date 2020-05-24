<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Role;
use Illuminate\Support\Facades\Cache;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Extended functions.
     */

    public function is($roleName)
    {
        $roles = Cache::remember('roles', 3600, function() {
            return Role::all();
        });

        $role = $roles->firstWhere('name', $roleName);

        return $this->role->priority <= $role->priority;
    }

    /**
     * Set relation tables.
     */

    public function role()
    {
    	return $this->belongsTo(Role::class);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function formulas()
    {
        return $this->hasMany(Formula::class);
    }
}
