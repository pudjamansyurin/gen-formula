<?php

use Illuminate\Support\Facades\Auth;
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

// Auth::routes();

Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::prefix('password')->group(function () {
    Route::post('email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
    Route::post('reset', 'Auth\ResetPasswordController@reset')->name('password.update');
    // Route::post('confirm', 'Auth\ConfirmPasswordController@confirm');
});
Route::prefix('email')->group(function () {
    //     Route::get('verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('resend', 'Auth\VerificationController@resend')->name('verification.resend');
});


Route::view('/{any}', 'spa')->where('any', '.*');
