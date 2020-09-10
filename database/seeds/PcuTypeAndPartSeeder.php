<?php

use Illuminate\Database\Seeder;

class PcuTypeAndPartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $fields = [
            'name' => 0,
            'symbol' => 1,
        ];

        $units = [
            ['Liter', 'L'],
            ['Kilogram', 'KG']
        ];

        $types = [
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
            App\PcuUnit::create([
                'name' => $unit[$fields['name']],
                'symbol' => $unit[$fields['symbol']],
            ]);
        }

        foreach ($types as $type) {
            $theType = App\PcuType::create([
                'name' => $type['name'],
            ]);

            foreach ($type['parts'] as $part) {
                App\PcuTypePart::create([
                    'name' => $part,
                    'pcu_type_id' => $theType->id
                ]);
            }
        }
    }
}
