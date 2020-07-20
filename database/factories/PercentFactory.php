<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Percent;
use App\Formula;
use App\Product;
use App\User;
use Faker\Generator as Faker;

$factory->define(Percent::class, function (Faker $faker) {
    // Fetch relations
    $users_id = User::all('id')->pluck('id')->toArray();
    $products_id = Product::all('id')->pluck('id')->toArray();
    $formulas_id = Formula::all('id')->pluck('id')->toArray();

    return [
        'formula_id' => $faker->randomElement($formulas_id),
        'product_id' => $faker->randomElement($products_id),
        'percent' => $faker->numberBetween(0, 100),
        'user_id' => $faker->randomElement($users_id),
        'created_at' => $faker->dateTimeBetween('-15 days', 'now'),
    ];
});
