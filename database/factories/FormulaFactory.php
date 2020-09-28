<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Formula;
use Faker\Generator as Faker;

$factory->define(Formula::class, function (Faker $faker) {
    return [
        'name' => "Formula {$faker->unique()->word}",
        // 'description' => $faker->sentence,
        'main' => $faker->boolean(),
        'density' => $faker->randomFloat(3, 0, 1),
        'shrink' => $faker->numberBetween(0, 100),
        'user_id' => App\User::all('id')->random(),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
