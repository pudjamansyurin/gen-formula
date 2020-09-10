<?php

namespace App\Policies;

use App\Price;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PricePolicy
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
    //  * @param  \App\Price  $price
    //  * @return mixed
    //  */
    // public function view(User $user, Price $price)
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
     * @param  \App\Price  $price
     * @return mixed
     */
    public function update(User $user, Price $price)
    {
        // only owner can update
        if ($user->id === $price->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['admin', 'manager']);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Price  $price
     * @return mixed
     */
    public function delete(User $user, $pricesId)
    {
        $belonging = Price::whereIn('id', $pricesId)
            ->where('user_id', $user->id)
            ->count();
        // only owner can delete
        if ($belonging == count($pricesId)) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }
}
