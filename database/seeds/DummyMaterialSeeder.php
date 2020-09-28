<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DummyMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        // Create materials
        factory(App\Material::class, 50)->create()
            ->each(function ($material) use ($faker) {
                for ($i = 0; $i < rand(1, 10); $i++) {
                    // Create revs
                    $material->revs()->create([
                        'price' => $faker->randomNumber(6),
                        'user_id' => $material->user_id,
                    ]);
                }
            });
    }
}
