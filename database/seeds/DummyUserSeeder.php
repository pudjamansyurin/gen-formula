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
        App\User::withoutEvents(function () {
            return factory(App\User::class, 10)->create();
        })->each(function ($user) {
            $role = Role::inRandomOrder()->first();
            $user->assignRole($role);
        });
    }
}
