<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pack;
use App\Packer;
use App\User;
use Faker\Generator as Faker;

$factory->define(Pack::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'packer_id' => Packer::inRandomOrder()->first('id'),
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => User::inRandomOrder()->first('id'),
    ];
});
