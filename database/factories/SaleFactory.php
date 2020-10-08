<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Sale;
use App\User;
use Faker\Generator as Faker;

$factory->define(Sale::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'filled' => $faker->numberBetween(80, 100),
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => User::role(['admin', 'manager'])->inRandomOrder()->first('id'),
    ];
});
