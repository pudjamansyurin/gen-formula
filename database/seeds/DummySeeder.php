<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DummySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\User::class, 10)->create()
            ->each(function ($user) {
                $user->assignRole(Role::inRandomOrder()->first());
            });

        $materials = factory(App\Material::class, 50)->create()
            ->each(function ($material) {
                for ($i = 1; $i < rand(1, 10); $i++) {
                    factory(App\Price::class)->create([
                        'material_id' => $material->id,
                        'user_id' => $material->user_id,
                    ]);
                }
            });

        factory(App\Formula::class, 25)->create()
            ->each(function ($formula) use ($materials) {
                $materialsUsed = [];
                $percentQuota = 100;

                while ($percentQuota) {
                    $percent = rand(1, $percentQuota);
                    $percentQuota -= $percent;

                    $material = $materials->whereNotIn('id', $materialsUsed)->random();
                    array_push($materialsUsed, $material->id);

                    factory(App\Percent::class)->create([
                        'percent' => $percent,
                        'formula_id' => $formula->id,
                        'material_id' => $material->id,
                        'user_id' => $formula->user_id,
                    ]);
                }
            });
    }
}
