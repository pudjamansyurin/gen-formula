<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Package;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'description' => $faker->sentence,
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'capacity' => $faker->numberBetween(0, 100),
        'unit_id' => App\PackageUnit::all('id')->random(),
        'user_id' => App\User::all('id')->random(),
    ];
});
