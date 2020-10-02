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
            UnitSeeder::class,
            PackerAndPackSeeder::class,
            MatterSeeder::class,

            DummyUserSeeder::class,
            DummyPackageSeeder::class,
            DummyMaterialSeeder::class,
            DummyFormulaSeeder::class,
            DummySaleSeeder::class
        ]);
    }
}
