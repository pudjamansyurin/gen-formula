<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DummyFormulaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $materials = App\Material::all();

        // Create formulas
        factory(App\Formula::class, 25)->create()
            ->each(function ($formula) use ($materials) {
                $materialsUsed = [];
                $portionQuota = 100;

                // create recipes
                while ($portionQuota) {
                    $portion = rand(1, $portionQuota);
                    $portionQuota -= $portion;

                    $material = $materials->whereNotIn('id', $materialsUsed)->random();
                    array_push($materialsUsed, $material->id);

                    // Create into database
                    $formula->recipes()->create([
                        'portion' => $portion,
                        'recipeable_id' => $material->id,
                        'recipeable_type' => get_class($material)
                    ]);
                }

                // create revs
                $price = $formula->calcRev();
                $formula->revs()->create([
                    'price' => $price,
                    'user_id' => $formula->user_id,
                ]);
            });
    }
}
