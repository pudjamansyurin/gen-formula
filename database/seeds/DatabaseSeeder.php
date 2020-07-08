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


        factory(App\Product::class, 50)->create();

        factory(App\ProductPrice::class, 50 * 5)->create();

        factory(App\Formula::class, 25)->create();
        // ->each(function ($formula) use ($products) {
        //     $percent = 100;

        //     while ($percent) {
        //         $random = rand(1, $percent);
        //         $percent -= $random;


        //         $formulaProducts['percent'] = array_push($percents, $random);
        //     }

        //     // $formula->products()->attach(

        //     // )
        // });

        factory(App\FormulaProduct::class, 25 * 10)->create();
    }
}
