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
        $packages = App\Package::getAsProductList();
        $formulas = App\Formula::getAsProductList();

        // Create sales
        factory(App\Sale::class, 25)->create()
            ->each(function ($sale) use ($faker, $packages, $formulas) {
                $component = rand(1, 2);

                // create products
                $products = $this->makeProducts($packages, $formulas, $component);
                // update products
                $sale->updateProduct($products);
                // create revs
                $sale->updateRev();


                // for ($i = 0; $i < rand(1, 5); $i++) {
                //     // Create revs
                //     $sale->revs()->create([
                //         'price' => $faker->randomNumber(6),
                //         'user_id' => $sale->user_id,
                //     ]);
                // }
            });
    }

    private function makeProducts($packages, $formulas, $component)
    {
        $products = [];
        $packagesUsed = [];
        $formulasUsed = [];

        for ($i = 0; $i < $component; $i++) {
            if ($component == 2) {
                $ratio = $i == 0 ? rand(7, 9) : rand(1, 3);
            } else {
                $ratio = 1;
            }

            $package = $packages->whereNotIn('id', $packagesUsed)
                ->filter(function ($package) use ($i) {
                    if ($i == 0) {
                        return $package->capacity >= 50;
                    }
                    return $package->capacity < 50;
                })
                ->random();
            array_push($packagesUsed, $package->id);

            $formula = $formulas->whereNotIn('id', $formulasUsed)
                ->random();
            array_push($formulasUsed, $formula->id);

            array_push($products, [
                'package_id' => $package->id,
                'formula_id' => $formula->id,
                'ratio' => $ratio,
            ]);
        }

        return $products;
    }
}
