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
                    factory(App\ProductPrice::class)->create([
                        'product_id' => $product->id
                    ]);
                }
            });

        factory(App\Formula::class, 25)->create()
            ->each(function ($formula) use ($products) {
                $productsQuota = $products->toArray();
                $percentQuota = 100;

                while ($percentQuota) {
                    $percent = rand(1, $percentQuota);
                    $percentQuota -= $percent;

                    $index = array_rand($productsQuota);
                    $product_id = $productsQuota[$index]['id'];
                    unset($productsQuota[$index]);

                    factory(App\FormulaProduct::class)->create([
                        'percent' => $percent,
                        'formula_id' => $formula->id,
                        'product_id' => $product_id
                    ]);
                }
            });
    }
}
