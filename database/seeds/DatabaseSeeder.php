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
            UserSeeder::class,
            PackerAndPackSeeder::class,

            DummyUserSeeder::class,
            DummyPackageSeeder::class,
            DummyMaterialAndPriceSeeder::class,
            DummyFormulaAndPortionSeeder::class
        ]);
    }
}
