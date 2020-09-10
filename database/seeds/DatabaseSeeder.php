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
            PcuTypeAndPartSeeder::class,

            DummyUserSeeder::class,
            DummyPcuSeeder::class,
            DummyMaterialAndPriceSeeder::class,
            DummyFormulaAndPortionSeeder::class
        ]);
    }
}
