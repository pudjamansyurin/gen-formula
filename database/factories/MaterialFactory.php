<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Material;
use App\Matter;
use App\User;
use Faker\Generator as Faker;

$factory->define(Material::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word,
        'matter_id' => Matter::inRandomOrder()->first('id'),
        'user_id' => User::inRandomOrder()->first('id'),
        'created_at' => $faker->dateTimeBetween('-1 year', 'now'),
    ];
});
