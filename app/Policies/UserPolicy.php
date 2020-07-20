<?php

namespace App\Policies;

use App\User;
use App\Helpers\Helper;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
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
        // only admin can view all users
        return $user->hasRole('admin');
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\User  $model
    //  * @return mixed
    //  */
    // public function view(User $user, User $model)
    // {
    //     return $user->can('users.view');
    // }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        // only admin can create user
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function update(User $user, User $model)
    {
        // only owner can update
        if ($user->id === $model->id) {
            return true;
        }
        // admin can update all
        return $user->hasRole('admin');
        // return $user->can('users.update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\User  $model
     * @return mixed
     */
    public function delete(User $user, $users_id)
    {
        // user can't delete their profile
        if (in_array($user->id, $users_id)) {
            return false;
        }
        // admin can delete all
        return $user->hasRole('admin');
    }

    /**
     * Determine whether the user can view roles.
     */
    public function viewRoles(User $user)
    {
        // only admin can view all roles
        return $user->hasRole('admin');
    }
}
