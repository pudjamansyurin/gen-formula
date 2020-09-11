<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Package;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'capacity' => $faker->numberBetween(0, 100),
        'unit_id' => App\Unit::all('id')->random(),
        'user_id' => App\User::all('id')->random(),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
