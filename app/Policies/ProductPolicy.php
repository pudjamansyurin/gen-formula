<?php

namespace App\Policies;

use App\Product;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
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
        return $user->can('products.view');
    }

    // /**
    //  * Determine whether the user can view the model.
    //  *
    //  * @param  \App\User  $user
    //  * @param  \App\Product  $product
    //  * @return mixed
    //  */
    // public function view(User $user, Product $product)
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
        return $user->can('products.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Product  $product
     * @return mixed
     */
    public function update(User $user, Product $product)
    {
        // only owner can update
        if ($user->id === $product->user_id) {
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
     * @param  \App\Product  $product
     * @return mixed
     */
    public function delete(User $user, $products_id)
    {
        $belonging = Product::whereIn('id', $products_id)
            ->where('user_id', $user->id)
            ->count();
        // only owner can delete
        if ($belonging == count($products_id)) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }
}
