<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DummySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\User::class, 10)->create()
            ->each(function ($user) {
                $user->assignRole(Role::inRandomOrder()->first());
            });

        $products = factory(App\Product::class, 50)->create()
            ->each(function ($product) {
                for ($i = 1; $i < rand(1, 10); $i++) {
                    factory(App\Price::class)->create([
                        'product_id' => $product->id,
                        'user_id' => $product->user_id,
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
                        'product_id' => $product->id,
                        'user_id' => $formula->user_id,
                    ]);
                }
            });
    }
}
