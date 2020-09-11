<?php

use Illuminate\Database\Seeder;

class PackerAndPackSeeder extends Seeder
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

        $packers = [
            [
                'name' => 'KALENG',
                'parts' => ['KALENG', 'STIKER KALENG']
            ],
            [
                'name' => 'KARTON',
                'parts' => ['KARTON BOX', 'STIKER KARTON', 'ISOLASI KARTON']
            ]
        ];

        foreach ($units as $unit) {
            App\Unit::create([
                'name' => $unit[0],
                'symbol' => $unit[1],
            ]);
        }

        foreach ($packers as $packer) {
            $thePacker = App\Packer::create([
                'name' => $packer['name'],
            ]);

            foreach ($packer['parts'] as $part) {
                App\Pack::create([
                    'name' => $part,
                    'packer_id' => $thePacker->id
                ]);
            }
        }
    }
}
