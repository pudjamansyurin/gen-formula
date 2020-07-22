<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RolesAndPermissionSeeder::class,
            UserSeeder::class
        ]);

        // Fetch relations
        $users_id = App\User::all('id');

        $products = factory(App\Product::class, 50)->create([
            'user_id' => $users_id->random()
        ])
            ->each(function ($product) use ($users_id) {
                for ($i = 1; $i < rand(1, 10); $i++) {
                    factory(App\Price::class)->create([
                        'product_id' => $product->id,
                        'user_id' => $users_id->random(),
                    ]);
                }
            });

        factory(App\Formula::class, 25)->create([
            'user_id' => $users_id->random(),
        ])
            ->each(function ($formula) use ($products, $users_id) {
                $productsUsed = [];
                $percentQuota = 100;

                while ($percentQuota) {
                    $percent = rand(1, $percentQuota);
                    $percentQuota -= $percent;

                    $product = $products->whereNotIn('id', $productsUsed)->random();
                    array_push($productsUsed, $product->id);

                    factory(App\Percent::class)->create([
                        'percent' => $percent,
                        'formula_id' => $formula->id,
                        'product_id' => $product->id,
                        'user_id' => $users_id->random(),
                    ]);
                }
            });
    }
}
