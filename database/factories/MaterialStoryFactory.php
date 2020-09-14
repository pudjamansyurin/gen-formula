<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\MaterialStory;
use Faker\Generator as Faker;

$factory->define(MaterialStory::class, function (Faker $faker) {
    return [
        'material_id' => App\Material::all('id')->random(),
        'price' => $faker->randomNumber(6),
        'updated_at' => $faker->dateTimeBetween('-1 year', 'now'),
        'user_id' => App\User::all('id')->random(),
    ];
});
