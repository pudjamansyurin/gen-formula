<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Inputor',
            'email' => 'inputor@gen.com',
            'password' => Hash::make('inputorpassword'),
            'created_at' => now()
        ]);
        $user->assignRole(Role::firstWhere('name', 'inputor'));

        $user = User::create([
            'name' => 'Manager',
            'email' => 'manager@gen.com',
            'password' => Hash::make('managerpassword'),
            'created_at' => now()
        ]);
        $user->assignRole(Role::firstWhere('name', 'manager'));

        $user = User::create([
            'name' => 'Administrator',
            'email' => 'admin@gen.com',
            'password' => Hash::make('adminpassword'),
            'created_at' => now()
        ]);
        $user->assignRole(Role::firstWhere('name', 'administrator'));
    }
}
