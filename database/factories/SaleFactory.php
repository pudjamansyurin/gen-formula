<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'filled' => $faker->numberBetween(0, 100),
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => App\User::all('id')->random(),
    ];
});
