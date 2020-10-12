<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Packer;
use App\User;
use Faker\Generator as Faker;

$factory->define(Packer::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => User::inRandomOrder()->first('id'),
    ];
});
