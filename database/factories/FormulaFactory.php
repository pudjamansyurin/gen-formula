<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Formula;
use App\User;
use Faker\Generator as Faker;

$factory->define(Formula::class, function (Faker $faker) {
    // Fetch relations
    $users_id = User::all('id')->pluck('id')->toArray();

    return [
        'name' => "Formula {$faker->unique()->word}",
        'description' => $faker->sentence,
        'created_at' => $faker->dateTimeBetween('-30 days', 'now'),
        'user_id' => $faker->randomElement($users_id),
    ];
});
