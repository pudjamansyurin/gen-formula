<?php

use Illuminate\Database\Seeder;

class DummyPackageSeeder extends Seeder
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
            'capacity' => 2,
            'karton_content' => 3
        ];

        $products = [
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

        $units = App\PackageUnit::all();
        $types = App\PackageType::all();
        $parts = App\PackageTypePart::with('type')->get();

        foreach ($products as $product) {
            $package = factory(App\Package::class)->create([
                'name' => $product[$fields['name']],
                'unit_id' => $units->firstWhere('symbol', $product[$fields['symbol']])['id'],
                'capacity' => $product[$fields['capacity']],
            ]);

            // create kaleng
            $package->types()->attach(
                $types->firstWhere('name', 'KALENG'),
                ['content' => 1]
            );

            // create karton
            $karton_content = $product[$fields['karton_content']];
            if ($karton_content > 0) {
                $package->types()->attach(
                    $types->firstWhere('name', 'KARTON'),
                    ['content' => $karton_content]
                );
            }
        }
    }
}
