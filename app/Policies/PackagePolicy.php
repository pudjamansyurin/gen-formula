<?php

namespace App\Policies;

use App\Package;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackagePolicy
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
        return $user->can('package.view');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Package  $package
     * @return mixed
     */
    public function view(User $user, Package $package)
    {
        return $user->can('package.view');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('package.create');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Package  $package
     * @return mixed
     */
    public function update(User $user, Package $package)
    {
        // only owner can update
        if ($user->id === $package->user_id) {
            return true;
        }
        // above role can update all
        return $user->hasRole(['manager', 'admin']);
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Package  $package
     * @return mixed
     */
    public function delete(User $user, $packagesId)
    {
        $others = Package::whereIn('id', $packagesId)
            ->where('user_id', '!=', $user->id)
            ->count();
        // only owner can delete
        if ($others == 0) {
            return true;
        }
        // above role can delete all
        return $user->hasRole(['admin', 'manager']);
    }

    /**
     * Determine whether the user can view roles.
     */
    public function unit(User $user)
    {
        return $user->can('unit.view');
    }
}
