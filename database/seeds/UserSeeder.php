<?php

use App\Role;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = Role::all();

        User::insert([
            [
                'name' => 'Admin',
                'email' => 'admin@gen-formula.com',
                'role_id' => $roles->firstWhere('name', 'ADMIN')->id,
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gen-formula.com',
                'role_id' => $roles->firstWhere('name', 'MANAGER')->id,
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
            [
                'name' => 'Editor',
                'email' => 'editor@gen-formula.com',
                'role_id' => $roles->firstWhere('name', 'EDITOR')->id,
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
        ]);
    }
}
