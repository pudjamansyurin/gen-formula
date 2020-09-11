<?php

use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $fields = [
        //     'name' => 0,
        //     'symbol' => 1,
        // ];

        $units = [
            ['Liter', 'L'],
            ['Kilogram', 'KG']
        ];

        foreach ($units as $unit) {
            App\Unit::create([
                'name' => $unit[0],
                'symbol' => $unit[1],
            ]);
        }
    }
}
