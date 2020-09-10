<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Pcu;
use Faker\Generator as Faker;

$factory->define(Pcu::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'capacity' => $faker->numberBetween(0, 100),
        'unit_id' => App\PcuUnit::all('id')->random(),
        'user_id' => App\User::all('id')->random(),
    ];
});
