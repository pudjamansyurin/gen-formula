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
        factory(App\ProductPrice::class, 250)->create();
    }
}
