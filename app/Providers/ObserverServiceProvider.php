<?php

namespace App\Providers;

use App\Formula;
use App\Material;
use App\Observers\FormulaObserver;
use App\Observers\MaterialObserver;
use App\Observers\PackageObserver;
use App\Observers\PackObserver;
use App\Observers\SaleObserver;
use App\Observers\UserObserver;
use App\Pack;
use App\Package;
use App\Sale;
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
        Pack::observe(PackObserver::class);
        Formula::observe(FormulaObserver::class);
        Sale::observe(SaleObserver::class);
    }
}
