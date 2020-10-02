<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DummySaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        // Create sales
        factory(App\Sale::class, 25)->create()
            ->each(function ($sale) use ($faker) {
                for ($i = 0; $i < rand(1, 5); $i++) {
                    // Create revs
                    $sale->revs()->create([
                        'price' => $faker->randomNumber(6),
                        'user_id' => $sale->user_id,
                    ]);
                }
            });
    }
}
