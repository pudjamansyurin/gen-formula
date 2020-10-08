<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Matter;
use App\User;
use Faker\Generator as Faker;

$factory->define(Matter::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => User::role(['admin', 'manager'])->inRandomOrder()->first('id'),
    ];
});
