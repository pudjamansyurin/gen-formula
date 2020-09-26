<?php

namespace App\Providers;

use App\Material;
use App\Observers\MaterialObserver;
use App\Observers\PackageObserver;
use App\Observers\UserObserver;
use App\Package;
use App\User;
use Illuminate\Support\ServiceProvider;

class ObserverServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        User::observe(UserObserver::class);
        Package::observe(PackageObserver::class);
        Material::observe(MaterialObserver::class);
    }
}