<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\User;
use Illuminate\Support\Arr;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    // Fetch relations
    $user_ids = User::all('id')->pluck('id')->toArray();

    return [
        'name' => $faker->unique()->word,
        'description' => $faker->sentence,
        'created_at' => $faker->dateTimeBetween('-30 days', '-15 days'),
        'user_id' => Arr::random($user_ids),
    ];
});
