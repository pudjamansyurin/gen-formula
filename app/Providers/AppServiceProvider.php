<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Barryvdh\Debugbar\Facade as Debugbar;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
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
