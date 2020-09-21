<?php

namespace App\Policies;

use App\Pack;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackPolicy
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
        return $user->can('pack.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Pack  $pack
     * @return mixed
     */
    public function view(User $user, Pack $pack)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('pack.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Pack  $pack
     * @return mixed
     */
    public function update(User $user, Pack $pack)
    {
        // only owner can update
        if ($user->id === $pack->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Pack  $pack
     * @return mixed
     */
    public function delete(User $user, $packsId)
    {
        $others = Pack::whereIn('id', $packsId)
            ->where('user_id', '!=', $user->id)
            ->count();
        // only owner can delete
        if ($others == 0) {
            return true;
        }
        // above role can delete all
        return $user->hasRole('admin');
    }
}
