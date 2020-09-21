<?php

use Illuminate\Database\Seeder;

class DummyMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create materials
        factory(App\Material::class, 50)->create()
            ->each(function ($material) {
                for ($i = 0; $i < rand(1, 10); $i++) {
                    // Create revs
                    factory(App\MaterialRev::class)->create([
                        'material_id' => $material->id,
                        'user_id' => $material->user_id,
                    ]);
                }
            });
    }
}
