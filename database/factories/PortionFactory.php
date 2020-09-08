<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Portion;
use Faker\Generator as Faker;

$factory->define(Portion::class, function (Faker $faker) {
    return [
        'portion' => $faker->numberBetween(0, 100),
        'created_at' => $faker->dateTimeBetween('-10 months', 'now'),
    ];
});
