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
