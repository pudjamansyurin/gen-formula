<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Material;
use App\User;
use App\Price;
use Faker\Generator as Faker;

$factory->define(Price::class, function (Faker $faker) {
    return [
        'price' => $faker->randomNumber(6),
        'changed_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
