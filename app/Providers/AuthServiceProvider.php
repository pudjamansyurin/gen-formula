<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\User' => 'App\Policies\UserPolicy',
        'App\Packer' => 'App\Policies\PackerPolicy',
        'App\Package' => 'App\Policies\PackagePolicy',
        'App\Matter' => 'App\Policies\MatterPolicy',
        'App\Material' => 'App\Policies\MaterialPolicy',
        'App\MaterialRev' => 'App\Policies\MaterialRevPolicy',
        'App\Formula' => 'App\Policies\FormulaPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // // Implicitly grant "admin" role all permissions
        // Gate::before(function ($user, $ability) {
        //     return $user->hasRole('admin') ? true : null;
        // });
    }
}
