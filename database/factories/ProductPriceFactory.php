<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use App\User;
use App\ProductPrice;
use Illuminate\Support\Arr;
use Faker\Generator as Faker;

$factory->define(ProductPrice::class, function (Faker $faker) {
    // Fetch relations
    $user_ids = User::all('id')->pluck('id')->toArray();
    $product_ids = Product::all('id')->pluck('id')->toArray();

    return [
        'product_id' => Arr::random($product_ids),
        'price' => $faker->randomNumber(6),
        'changed_at' => $faker->dateTimeBetween('-6 months', 'now'),
        'user_id' => Arr::random($user_ids),
        'created_at' => $faker->dateTimeBetween('-15 days', 'now'),
    ];
});
