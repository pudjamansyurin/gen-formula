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
    Route::apiResource('material', 'MaterialController', ['except' => ['show']]);
    Route::apiResource('material-rev', 'MaterialRevController', ['only' => ['destroy']]);

    Route::apiResource('pack', 'PackController', ['except' => ['show']]);
    Route::apiResource('packer', 'PackerController', ['except' => ['show']]);
    Route::apiResource('package', 'PackageController', ['except' => ['show']]);

    Route::apiResource('formula', 'FormulaController', ['except' => ['show']]);
    Route::apiResource('formula.portion', 'PortionController', ['only' => ['store']]);

    Route::apiResource('user', 'UserController', ['except' => ['show']]);
    Route::get('/profile', 'UserController@profile');

    Route::group(['prefix' => 'list'], function () {
        Route::get('packer', 'PackerController@list');
        Route::get('matter', 'MatterController@list');
        Route::get('material', 'MaterialController@list');
        Route::get('unit', 'PackageController@unit');
        Route::get('role', 'UserController@role');
    });
});
