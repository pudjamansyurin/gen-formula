<?php

namespace App\Policies;

use App\Material;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MaterialPolicy
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
        return $user->can('materials.view');
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Material  $material
    //  * @return mixed
    //  */
    // public function view(User $user, Material $material)
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
        return $user->can('materials.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Material  $material
     * @return mixed
     */
    public function update(User $user, Material $material)
    {
        // only owner can update
        if ($user->id === $material->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['admin', 'manager']);
        // return $user->can('formulas.update');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Material  $material
     * @return mixed
     */
    public function delete(User $user, $materials_id)
    {
        $belonging = Material::whereIn('id', $materials_id)
            ->where('user_id', $user->id)
            ->count();
        // only owner can delete
        if ($belonging == count($materials_id)) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }
}
