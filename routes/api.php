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
    Route::apiResource('matter', 'MatterController', ['except' => ['show']]);
    Route::apiResource('material-rev', 'MaterialRevController', ['only' => ['destroy']]);
    Route::apiResource('material', 'MaterialController');

    Route::apiResource('pack', 'PackController', ['except' => ['show']]);
    Route::apiResource('packer', 'PackerController', ['except' => ['show']]);
    Route::apiResource('package', 'PackageController');

    Route::apiResource('formula', 'FormulaController');

    Route::apiResource('sale', 'SaleController');

    Route::apiResource('user', 'UserController', ['except' => ['show']]);

    Route::group(['prefix' => 'profile'], function () {
        Route::get('', 'ProfileController@show');
        Route::put('update', 'ProfileController@update');
    });

    Route::group(['prefix' => 'list'], function () {
        Route::get('matter', 'MatterController@list');
        Route::get('packer', 'PackerController@list');
        Route::get('package', 'PackageController@list');
        Route::get('recipe', 'FormulaController@recipes');
        Route::get('formula', 'FormulaController@list');
        Route::get('unit', 'PackageController@units');
        Route::get('role', 'UserController@roles');
    });
});
