<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\User;
use App\Price;
use Faker\Generator as Faker;

$factory->define(Price::class, function (Faker $faker) {
    return [
        'price' => $faker->randomNumber(6),
        'changed_at' => $faker->dateTimeBetween('-6 months', 'now'),
        'created_at' => $faker->dateTimeBetween('-15 days', 'now'),
    ];
});
