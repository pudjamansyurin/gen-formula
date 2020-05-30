<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Role;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$role_ids = Role::all()->reject(function ($role, $key) {
    return $role->name == 'ADMIN';
})->pluck('id');

$factory->define(User::class, function (Faker $faker) use ($role_ids) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'role_id' => $faker->randomElement($role_ids),
        'password' => Hash::make($faker->password),
    ];
});
