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

        $products = factory(App\Product::class, 50)->create()
            ->each(function ($product) {
                for ($i = 1; $i < rand(1, 10); $i++) {
                    factory(App\Price::class)->create([
                        'product_id' => $product->id
                    ]);
                }
            });

        factory(App\Formula::class, 25)->create()
            ->each(function ($formula) use ($products) {
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
                        'product_id' => $product->id
                    ]);
                }
            });
    }
}
