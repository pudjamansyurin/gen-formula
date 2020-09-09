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
        $products = [
            [ 'LUXOR LTR STD', 'L', 1 ],
            [ 'LUXOR LTR KC', 'L', 1 ],
            [ 'LUXOR GALON', 'L', 19 ],
            [ 'LUXOR PAIL CAN', 'L', 50 ],
            [ 'BOTOL HARDENER 100 CC', 'L', 0.1 ],
            [ 'BOTOL HARDENER 500 CC', 'L', 0.5 ],
            [ 'BOTOL HARDENER 2 LTR', 'L', 2 ],
            [ 'WOOD FILLER LTR STD', 'L', 1 ],
            [ 'WOOD FILLER LTR KC', 'L', 1 ],
            [ 'WOOD FILLER GALON', 'L', 19  ],
            [ 'WOOD FILLER PAIL CAN', 'L', 50 ],
            [ 'WOOD STAIN BOTOL STD', 'L', 0.6 ],
            [ 'WOOD STAIN BOTOL KC', 'L', 0.6  ],
            [ 'WOOD STAIN JERIGEN', 'L', 120 ],
            [ 'POLOSAN PAIL', 'L', 50 ],
            [ 'DEMPUL HUMMER KG', 'KG', 1 ],
            [ 'EPOXY KG PSR', 'KG', 5 ],
            [ 'EPOXY KG BN', 'KG', 10 ],
            [ 'EPOXY 200 CC', 'L', 0.2  ],
            [ 'THINNER LUXOR LTR', 'L', 1 ],
            [ 'THINNER LUXOR 5 LTR', 'L', 5 ],
            [ 'THINNER B 600 ML', 'L', 0.6  ],
            [ 'JURIGEN', 'L', 120 ],
            [ 'DE CROSS GALON', 'L', 19 ],
            [ 'DE CROSS PAIL', 'L', 50 ],
            [ 'DE CROSS MERAH GALON', 'L', 19 ],
            [ 'DE CROSS MERAH PAIL', 'L', 50 ],
            [ 'BLAZER GALON', 'L', 19 ],
            [ 'BLAZER PAIL', 'L', 50 ]
        ];
    }
}
