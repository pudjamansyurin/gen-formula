<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Material;
use Faker\Generator as Faker;

$factory->define(Material::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'matter_id' => App\Matter::all('id')->random(),
        'user_id' => App\User::all('id')->random(),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
