<?php

namespace App\Policies;

use App\MaterialRev;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MaterialRevPolicy
{
    use HandlesAuthorization;


    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('material-rev.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\MaterialRev  $rev
     * @return mixed
     */
    public function update(User $user, MaterialRev $rev)
    {
        // only owner can update
        if ($user->id === $rev->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['admin', 'manager']);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\MaterialRev  $revsId
     * @return mixed
     */
    public function delete(User $user, $revsId)
    {
        $others = MaterialRev::whereIn('id', $revsId)
            ->where('user_id', '!=', $user->id)
            ->count();
        // only owner can delete
        if ($others == 0) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }
}
