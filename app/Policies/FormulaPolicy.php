<?php

namespace App\Policies;

use App\Formula;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FormulaPolicy
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
        return $user->can('formulas.view');
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Formula  $formula
    //  * @return mixed
    //  */
    // public function view(User $user, Formula $formula)
    // {
    //     //
    // }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('formulas.create');
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
        // only owner can update
        if ($user->id === $formula->user_id) {
            return true;
        }
        // admin can update all
        return $user->hasRole('admin');
        // return $user->can('formulas.update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Formula  $formula
     * @return mixed
     */
    public function delete(User $user,  $formulas_id)
    {
        $belonging = Formula::whereIn('id', $formulas_id)
            ->where('user_id', $user->id)
            ->count();
        // only owner can delete
        if ($belonging == count($formulas_id)) {
            return true;
        }
        // admin can delete all
        return $user->hasRole('admin');
    }
}
