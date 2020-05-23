<?php

namespace App\Policies;

use App\Formula;
use App\User;
use App\Helpers\Helper;
use Illuminate\Auth\Access\HandlesAuthorization;

class FormulaPolicy
{
    use HandlesAuthorization;

    public function before(User $user)
    {
        if ($user->is('ADMIN'))
        {
            return true;
        }
    }

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return $user->is('MANAGER');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function view(User $user, Formula $formula)
    {
        return $user->is('MANAGER');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->is('MANAGER');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function update(User $user, Formula $formula)
    {
        return $user->id == $formula->user_id || $user->is('ADMIN');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function delete(User $user, Formula $formula)
    {
        return $user->id == $formula->user_id || $user->is('ADMIN');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function restore(User $user, Formula $formula)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function forceDelete(User $user, Formula $formula)
    {
        //
    }
}
