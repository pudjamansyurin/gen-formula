<?php

namespace App;

use App\Traits\ClientQueryScope;
use App\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasRoles, Notifiable;
    use ClientQueryScope;

    protected $table = 'users';

    protected $relations = ['roles:id,name'];

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

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail());
    }

    /**
     * Mark the given user's email as un-verified.
     *
     * @return bool
     */
    public function unVerifyChangedEmail()
    {
        if ($this->email != request('email')) {
            return $this->forceFill([
                'email_verified_at' => null,
            ])->save();
        }
        return $this;
    }
}
