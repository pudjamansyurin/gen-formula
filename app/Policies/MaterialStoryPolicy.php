<?php

namespace App\Policies;

use App\MaterialStory;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class MaterialStoryPolicy
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
        return true;
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\MaterialStory  $story
    //  * @return mixed
    //  */
    // public function view(User $user, MaterialStory $story)
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
        return true;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\MaterialStory  $story
     * @return mixed
     */
    public function update(User $user, MaterialStory $story)
    {
        // only owner can update
        if ($user->id === $story->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['admin', 'manager']);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\MaterialStory  $storiesId
     * @return mixed
     */
    public function delete(User $user, $storiesId)
    {
        $belonging = MaterialStory::whereIn('id', $storiesId)
            ->where('user_id', $user->id)
            ->count();
        // only owner can delete
        if ($belonging == count($storiesId)) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }
}