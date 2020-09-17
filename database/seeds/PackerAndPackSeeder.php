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
                'packs' => ['KALENG', 'STIKER KALENG']
            ],
            [
                'name' => 'KARTON',
                'packs' => ['KARTON BOX', 'STIKER KARTON', 'ISOLASI KARTON']
            ]
        ];

        foreach ($packers as $packer) {
            $thePacker = factory(App\Packer::class)->create([
                'name' => $packer['name'],
            ]);

            foreach ($packer['packs'] as $pack) {
                factory(App\Pack::class)->create([
                    'name' => $pack,
                    'packer_id' => $thePacker->id
                ]);
            }
        }
    }
}
