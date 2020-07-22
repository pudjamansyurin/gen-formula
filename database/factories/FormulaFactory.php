<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Formula;
use Faker\Generator as Faker;

$factory->define(Formula::class, function (Faker $faker) {
    return [
        'name' => "Formula {$faker->unique()->word}",
        'description' => $faker->sentence,
        'created_at' => $faker->dateTimeBetween('-30 days', 'now'),
    ];
});
