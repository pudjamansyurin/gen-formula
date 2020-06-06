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
        // 'App\User' => 'App\Policies\UserPolicy',
        // 'App\Product' => 'App\Policies\ProductPolicy',
        // 'App\Formula' => 'App\Policies\FormulaPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // // Implicitly grant "administrator" role all permissions
        // Gate::before(function ($user, $ability) {
        //     return $user->hasRole('administrator') ? true : null;
        // });
    }
}
