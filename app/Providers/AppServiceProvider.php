<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Barryvdh\Debugbar\Facade as Debugbar;
use Illuminate\Auth\Notifications\ResetPassword;
use Laravel\Sanctum\Sanctum;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\App;

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
        if (App::environment('production')) {
            Debugbar::disable();
        }

        ResetPassword::createUrlUsing(function ($notifiable, $token) {
            return env('VUE_URL') . "/reset/{$token}/{$notifiable->getEmailForPasswordReset()}";
        });

        Builder::defaultStringLength(191); // Update defaultStringLength
    }
}
