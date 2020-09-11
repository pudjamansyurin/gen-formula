<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('material', 'MaterialController', ['except' => ['show']]);
    // Route::apiResource('material.price', 'PriceController', ['except' => ['show']]);
    Route::apiResource('formula', 'FormulaController', ['except' => ['show']]);
    Route::apiResource('formula.portion', 'PortionController', ['only' => ['store']]);
    Route::apiResource('user', 'UserController', ['except' => ['show']]);

    Route::get('/profile', 'UserController@profile');
    Route::get('/role', 'UserController@role');
});
