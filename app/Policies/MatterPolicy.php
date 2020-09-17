<?php

namespace App\Policies;

use App\Matter;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MatterPolicy
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
        return $user->can('matter.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('matter.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Matter  $matter
     * @return mixed
     */
    public function update(User $user, Matter $matter)
    {
        // only owner can update
        if ($user->id === $matter->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Matter  $matter
     * @return mixed
     */
    public function delete(User $user, $mattersId)
    {
        $others = Matter::whereIn('id', $mattersId)
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
