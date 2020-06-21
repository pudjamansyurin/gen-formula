<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Barryvdh\Debugbar\Facade as Debugbar;
use Laravel\Sanctum\Sanctum;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // We dont want to use Sanctum's token
        Sanctum::ignoreMigrations();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Debugbar::disable();
    }
}
