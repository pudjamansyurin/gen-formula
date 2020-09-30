<?php

use App\Material;
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
        App\Formula::withoutEvents(function () use ($materials) {
            factory(App\Formula::class, 25)->create()
                ->each(function ($formula) use ($materials) {
                    // create recipes: material
                    $materialRecipes = $this->makeMaterialRecipes($materials);
                    // update recipes: material
                    $formula->updateRecipe($materialRecipes);
                    // create revs
                    $formula->updateRev();
                });
        });
    }

    private function makeMaterialRecipes($materials)
    {
        $portionQuota = 100;

        $materialsUsed = [];
        $materialRecipes = [];
        while ($portionQuota) {
            $portion = rand(1, $portionQuota);
            $portionQuota -= $portion;

            $material = $materials->whereNotIn('id', $materialsUsed)->random();
            array_push($materialsUsed, $material->id);

            array_push($materialRecipes, [
                'recipeable_id' => $material->id,
                'recipeable_type' => get_class($material),
                'portion' => $portion,
            ]);
        }

        return $materialRecipes;
    }
}
