<?php

use App\Pack;
use App\Packer;
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
                'packs' => ['KALENG', 'STIKER KALENG']
            ],
            [
                'name' => 'KARTON',
                'packs' => ['KARTON BOX', 'STIKER KARTON', 'ISOLASI KARTON']
            ]
        ];

        foreach ($packers as $packer) {
            $thePacker = factory(Packer::class)->create([
                'name' => $packer['name'],
            ]);

            foreach ($packer['packs'] as $pack) {
                factory(Pack::class)->create([
                    'name' => $pack,
                    'packer_id' => $thePacker->id
                ]);
            }
        }
    }
}
