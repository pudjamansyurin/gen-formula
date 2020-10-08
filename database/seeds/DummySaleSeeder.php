<?php

use App\Formula;
use App\Package;
use App\Sale;
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
        $packages = Package::getAsProductList();
        $formulas = Formula::getAsProductList();

        // Create sales
        Sale::withoutEvents(function () use ($packages, $formulas) {
            factory(Sale::class, 25)->create()
                ->each(function ($sale) use ($packages, $formulas) {
                    $component = rand(1, 2);
                    // update filled
                    if ($component > 1) {
                        $sale->filled = 100;
                        $sale->save();
                    }

                    // create products
                    $products = $this->makeProducts($packages, $formulas, $component);
                    // update products
                    $sale->updateProduct($products);
                    // create revs
                    $sale->updateRev();
                });
        });
    }

    private function makeProducts($packages, $formulas, $component)
    {
        $products = [];
        $packagesUsed = [];
        $formulasUsed = [];
        $ratioTotal = 0;
        $salePackage = collect();

        for ($i = 0; $i < $component; $i++) {
            // generate ratio
            $ratio = 1;
            if ($component > 1) {
                $ratio = $i == 0 ? rand(80, 99) : rand(1, 20);
            }
            $ratioTotal += $ratio;

            // generate package
            $package = $packages->whereNotIn('id', $packagesUsed)
                ->filter(function ($package) use ($i, $salePackage, $ratio, $ratioTotal) {
                    $capacity = $package->capacity;
                    if ($i == 0) {
                        return $capacity >= 50;
                    }

                    $saleCapacity = $salePackage->capacity;
                    $minPackageCapacity = ($ratio * $saleCapacity) / $ratioTotal;
                    return ($capacity > $minPackageCapacity && $capacity < $saleCapacity);
                })
                ->filter(function ($package) use ($i, $salePackage) {
                    if ($i == 0) {
                        return true;
                    }

                    return $package->unit->id == $salePackage->unit->id;
                })
                ->random();
            array_push($packagesUsed, $package->id);

            // catch first package
            if ($i == 0) {
                $salePackage = $package;
            }

            // generate formula
            $formula = $formulas->whereNotIn('id', $formulasUsed)->random();
            array_push($formulasUsed, $formula->id);

            // save them
            array_push($products, [
                'package_id' => $package->id,
                'formula_id' => $formula->id,
                'ratio' => $ratio,
            ]);
        }

        return $products;
    }
}
