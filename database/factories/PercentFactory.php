<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Percent;
use Faker\Generator as Faker;

$factory->define(Percent::class, function (Faker $faker) {
    return [
        'percent' => $faker->numberBetween(0, 100),
        'created_at' => $faker->dateTimeBetween('-10 months', 'now'),
    ];
});
