<?php

namespace App\Policies;

use App\Packer;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackerPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->can('packer.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('packer.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Packer  $packer
     * @return mixed
     */
    public function update(User $user, Packer $packer)
    {
        // only owner can update
        if ($user->id === $packer->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Packer  $packer
     * @return mixed
     */
    public function delete(User $user, Packer $packer)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Packer  $packer
     * @return mixed
     */
    public function restore(User $user, Packer $packer)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Packer  $packer
     * @return mixed
     */
    public function forceDelete(User $user, Packer $packer)
    {
        //
    }
}
