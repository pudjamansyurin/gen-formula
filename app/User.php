<?php

namespace App;

use App\Traits\Routines\UserRoutine;
use App\Traits\Scopes\ClientQueryScope;
use App\Traits\Scopes\ExtendedScope;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
// use Laravel\Sanctum\HasApiTokens;
// use Spatie\Permission\Models\Role;

class User extends Authenticatable
{
    use HasRoles, Notifiable;
    use ClientQueryScope, ExtendedScope;
    use UserRoutine;

    protected $table = 'users';

    protected $_relations = ['roles:id,name'];

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
     * Accessors
     */
    public function getNameAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Mutators
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    /**
     * Set relation tables.
     */

    public function packs()
    {
        return $this->hasMany(Pack::class);
    }

    public function packers()
    {
        return $this->hasMany(Packer::class);
    }

    public function packages()
    {
        return $this->hasMany(Package::class);
    }

    public function matters()
    {
        return $this->hasMany(Matter::class);
    }

    public function materials()
    {
        return $this->hasMany(Material::class);
    }

    public function formulas()
    {
        return $this->hasMany(Formula::class);
    }

    public function sales()
    {
        return $this->hasMany(Sale::class);
    }
}
