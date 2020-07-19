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
        return $user->can('users.view');
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
        return $user->can('users.create');
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
        // user can't delete their own account
        if ($user->id === $model->id) {
            return true;
        }
        return $user->can('users.update');
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
        // user can't delete their own account
        if (in_array($user->id, $users_id)) {
            return false;
        }

        return $user->can('users.delete');
    }

    /**
     * Determine whether the user can view roles.
     */
    public function viewRoles(User $user)
    {
        return $user->can('users.create');
    }
}
