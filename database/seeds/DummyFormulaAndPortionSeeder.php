<?php

use Illuminate\Database\Seeder;

class DummyFormulaAndPortionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $materials = App\Material::all();

        // Create formulas
        factory(App\Formula::class, 25)->create()
            ->each(function ($formula) use ($materials) {
                $materialsUsed = [];
                $portionQuota = 100;

                while ($portionQuota) {
                    $portion = rand(1, $portionQuota);
                    $portionQuota -= $portion;

                    $material = $materials->whereNotIn('id', $materialsUsed)->random();
                    array_push($materialsUsed, $material->id);

                    // Create formula_portions
                    factory(App\Portion::class)->create([
                        'portion' => $portion,
                        'formula_id' => $formula->id,
                        'material_id' => $material->id,
                        'user_id' => $formula->user_id,
                    ]);
                }
            });
    }
}
