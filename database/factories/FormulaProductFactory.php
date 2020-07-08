<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\FormulaProduct;
use App\Formula;
use App\Product;
use App\User;
use Faker\Generator as Faker;

$factory->define(FormulaProduct::class, function (Faker $faker) {
    // Fetch relations
    $user_ids = User::all('id')->pluck('id')->toArray();
    $product_ids = Product::all('id')->pluck('id')->toArray();
    $formula_ids = Formula::all('id')->pluck('id')->toArray();

    return [
        'formula_id' => $faker->randomElement($formula_ids),
        'product_id' => $faker->randomElement($product_ids),
        'percent' => $faker->numberBetween(0, 100),
        'user_id' => $faker->randomElement($user_ids),
        'created_at' => $faker->dateTimeBetween('-15 days', 'now'),
    ];
});
