<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth::routes(['register' => false]);
Route::namespace('Auth')->group(function () {
    // Authentication Routes...
    Route::get('login', [
        'as' => 'login',
        'uses' => 'LoginController@showLoginForm'
    ]);
    Route::post('login', [
        'as' => '',
        'uses' => 'LoginController@login'
    ]);
    Route::get('logout', [
        'as' => 'logout',
        'uses' => 'LoginController@logout'
    ]);

    // Password Reset Routes...
    Route::post('password/email', [
        'as' => 'password.email',
        'uses' => 'ForgotPasswordController@sendResetLinkEmail'
    ]);
    Route::get('password/reset', [
        'as' => 'password.request',
        'uses' => 'ForgotPasswordController@showLinkRequestForm'
    ]);
    Route::post('password/reset', [
        'as' => 'password.update',
        'uses' => 'ResetPasswordController@reset'
    ]);
    Route::get('password/reset/{token}', [
        'as' => 'password.reset',
        'uses' => 'ResetPasswordController@showResetForm'
    ]);

    // Registration Routes...
    // Route::get('register', [
    //     'as' => 'register',
    //     'uses' => 'RegisterController@showRegistrationForm'
    // ]);
    // Route::post('register', [
    //     'as' => '',
    //     'uses' => 'RegisterController@register'
    // ]);
});

Route::get('/', function() {
    return redirect('home');
});

Route::middleware('auth')->group(function() {
    Route::get('/home', 'HomeController@index')->name('home');
    Route::resources([
        'user' => 'UserController',
        'product' => 'ProductController',
        'formula'=> 'FormulaController',
    ]);
});
