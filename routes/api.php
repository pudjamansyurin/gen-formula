<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Models\Role;

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
    Route::apiResource('user', 'UserController');
    Route::apiResource('product', 'ProductController');
    Route::apiResource('product.price', 'ProductPriceController');
    Route::apiResource('formula', 'FormulaController');
    Route::apiResource('formula.percent', 'FormulaPercentController', ['only' => ['store']]);
    Route::get('/role', function () {
        return response([
            'data' => Role::all()
        ], Response::HTTP_OK);
    });
});
