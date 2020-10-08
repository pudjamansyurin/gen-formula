<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Package;
use App\Unit;
use App\User;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'capacity' => $faker->numberBetween(0, 100),
        'unit_id' => Unit::inRandomOrder()->first('id'),
        'user_id' => User::inRandomOrder()->first('id'),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
