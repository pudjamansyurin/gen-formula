<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DummyPackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        // $fields = [
        //     'name' => 0,
        //     'symbol' => 1,
        //     'capacity' => 2,
        //     'kartonContent' => 3
        // ];

        $packages = [
            ['LUXOR LTR STD', 'L', 1, 24],
            ['LUXOR LTR KC', 'L', 1, 12],
            ['LUXOR GALON', 'L', 19, 4],
            ['LUXOR PAIL CAN', 'L', 50, 0],
            ['BOTOL HARDENER 100 CC', 'L', 0.1, 24],
            ['BOTOL HARDENER 500 CC', 'L', 0.5, 4],
            ['BOTOL HARDENER 2 LTR', 'L', 2, 10],
            ['WOOD FILLER LTR STD', 'L', 1, 18],
            ['WOOD FILLER LTR KC', 'L', 1, 4],
            ['WOOD FILLER GALON', 'L', 19, 4],
            ['WOOD FILLER PAIL CAN', 'L', 50, 0],
            ['WOOD STAIN BOTOL STD', 'L', 0.6, 12],
            ['WOOD STAIN BOTOL KC', 'L', 0.6, 6],
            ['WOOD STAIN JERIGEN', 'L', 120, 0],
            ['POLOSAN PAIL', 'L', 50, 0],
            ['DEMPUL HUMMER KG', 'KG', 1, 10],
            ['EPOXY KG PSR', 'KG', 5, 24],
            ['EPOXY KG BN', 'KG', 10, 18],
            ['EPOXY 200 CC', 'L', 0.2, 50],
            ['THINNER LUXOR LTR', 'L', 1, 16],
            ['THINNER LUXOR 5 LTR', 'L', 5, 4],
            ['THINNER B 600 ML', 'L', 0.6, 28],
            ['JURIGEN', 'L', 120, 0],
            ['DE CROSS GALON', 'L', 19, 4],
            ['DE CROSS PAIL', 'L', 50, 0],
            ['DE CROSS MERAH GALON', 'L', 19, 4],
            ['DE CROSS MERAH PAIL', 'L', 50, 0],
            ['BLAZER GALON', 'L', 19, 4],
            ['BLAZER PAIL', 'L', 50, 0]
        ];

        $units = App\Unit::all();
        $packers = App\Packer::with('packs')->get();

        foreach ($packages as $package) {
            $thePackage = factory(App\Package::class)->create([
                'name' => $package[0],
                'unit_id' => $units->firstWhere('symbol', $package[1])['id'],
                'capacity' => $package[2],
            ]);

            // create packager
            $packers->each(function ($packer) use ($thePackage, $faker, $package) {
                $content = ($packer->name == 'KALENG' ? 1 : $package[3]);

                if ($content) {
                    $thePackager = $thePackage->packagers()->create([
                        'packer_id' => $packer->id,
                        'content' => $content
                    ]);

                    // create packets
                    $packer->packs->each(function ($pack) use ($thePackager, $faker, $packer) {
                        $digitPrice = ($packer->name == 'KALENG' ? 5 : 4);

                        $thePackager->packets()->attach($pack, [
                            'price' => $faker->randomNumber($digitPrice)
                        ]);
                    });
                }
            });

            // calculate total price
            $total = $thePackage->packagers->reduce(function ($carry, $packager) {
                $pricePackets = $packager->packets->reduce(function ($carry, $packet) {
                    return $carry + $packet->pivot->price;
                }, 0) / $packager->content;

                return $carry + $pricePackets;
            }, 0);

            // create revs
            $thePackage->revs()->create([
                'price' => $total
            ]);
        }
    }
}
