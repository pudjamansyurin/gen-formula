<?php

use Illuminate\Database\Seeder;

class MatterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $matters = [
            'Resin',
            'Solvent',
            'Filler',
            'Additive Powder',
            'Additive Liquid',
            'Chemical Compound'
        ];

        foreach ($matters as $matter) {
            factory(App\Matter::class)->create([
                'name' => $matter
            ]);
        };
    }
}
