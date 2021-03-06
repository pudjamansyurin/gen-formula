<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Formula;
use App\User;
use Faker\Generator as Faker;

$factory->define(Formula::class, function (Faker $faker) {
    return [
        'name' => "Formula {$faker->unique()->word}",
        // 'description' => $faker->sentence,
        'main' => $faker->boolean(),
        'density' => $faker->randomFloat(2, 0, 1),
        'shrink' => $faker->numberBetween(0, 99),
        'user_id' => User::role(['admin', 'manager'])->inRandomOrder()->first('id'),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
