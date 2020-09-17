<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pack;
use Faker\Generator as Faker;

$factory->define(Pack::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'packer_id' => App\Packer::all('id')->random(),
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => App\User::all('id')->random(),
    ];
});
