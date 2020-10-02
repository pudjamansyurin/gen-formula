<?php

namespace App\Policies;

use App\Sale;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SalePolicy
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
        return $user->can('sale.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Sale  $sale
     * @return mixed
     */
    public function view(User $user, Sale $sale)
    {
        return $user->can('sale.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('sale.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Sale  $sale
     * @return mixed
     */
    public function update(User $user, Sale $sale)
    {
        // only owner can update
        if ($user->id === $sale->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['admin']);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Sale  $sale
     * @return mixed
     */
    public function delete(User $user, $salesId)
    {
        $others = Sale::whereIn('id', $salesId)
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
