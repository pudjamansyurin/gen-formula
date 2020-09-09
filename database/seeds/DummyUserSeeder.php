<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DummyUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create users
        factory(App\User::class, 10)->create()
            ->each(function ($user) {
                $user->assignRole(Role::inRandomOrder()->first());
            });
    }
}
