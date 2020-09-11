<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\MaterialStory;
use Faker\Generator as Faker;

$factory->define(MaterialStory::class, function (Faker $faker) {
    return [
        'price' => $faker->randomNumber(6),
        'material_id' => App\Material::all('id')->random(),
        'user_id' => App\User::all('id')->random(),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
