<?php

use App\User;
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
        User::withoutEvents(function () {
            return factory(User::class, 10)->create();
        })->each(function ($user) {
            $role = Role::inRandomOrder()->first();
            $user->assignRole($role);
        });
    }
}
