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

Auth::routes(['register' => false]);

Route::get('/', function() {
    return redirect('/home');
});

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('product', 'ProductController');
Route::resource('formula', 'FormulaController');
Route::resource('price', 'PriceController');
