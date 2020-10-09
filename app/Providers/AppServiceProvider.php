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
        /* Production condition */
        if (App::environment('production')) {
            Debugbar::disable();

            /* Fix cpanel mysql issue */
            Builder::defaultStringLength(191);

            /* Fix laravel-mix manifest issue */
            $this->app->bind('path.public', function () {
                $domain = env('APP_PROD_DOMAIN');

                return base_path() . "/../{$domain}";
            });
        }

        /* Fix reset password api endpoint */
        ResetPassword::createUrlUsing(function ($notifiable, $token) {
            $email = $notifiable->getEmailForPasswordReset();

            return env('VUE_URL') . "/reset/{$token}/{$email}";
        });
    }
}
