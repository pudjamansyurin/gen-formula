<?php

use Illuminate\Database\Seeder;

class PackageRelatedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $units = [
            [ 'Liter', 'L' ],
            [ 'Kilogram', 'KG' ]
        ];

        $types = [
            [
                'name' => 'KALENG',
                'is_base' => true,
                'parts' => ['KALENG', 'STIKER KALENG']
            ],
            [
                'name' => 'KARTON',
                'is_base' => false,
                'parts' => ['KARTON BOX', 'STIKER KARTON', 'ISOLASI KARTON']
            ]
        ];

        foreach ($units as $unit) {
            App\PackageUnit::create([
                'name' => $unit[0],
                'symbol' => $unit[1],
            ]);
        }

        foreach ($types as $type) {
            $theType = App\PackageType::create([
                'name' => $type['name'],
                'is_base' => $type['is_base'],
            ]);

            foreach ($type['parts'] as $part) {
                App\PackageTypePart::create([
                    'name' => $part,
                    'package_type_id' => $theType->id
                ]);
            }
        }
    }
}
