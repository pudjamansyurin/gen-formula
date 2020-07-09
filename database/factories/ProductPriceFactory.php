<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\User;
use App\ProductPrice;
use Faker\Generator as Faker;

$factory->define(ProductPrice::class, function (Faker $faker) {
    // Fetch relations
    $users_id = User::all('id')->pluck('id')->toArray();
    $products_id = Product::all('id')->pluck('id')->toArray();

    return [
        'product_id' => $faker->randomElement($products_id),
        'price' => $faker->randomNumber(6),
        'changed_at' => $faker->dateTimeBetween('-6 months', 'now'),
        'user_id' => $faker->randomElement($users_id),
        'created_at' => $faker->dateTimeBetween('-15 days', 'now'),
    ];
});
