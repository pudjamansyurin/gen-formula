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
        $users = [
            [
                'name' => 'Inputor',
                'email' => 'inputor@gen.com',
                'password' => 'inputorpassword',
                'role' => 'inputor'
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gen.com',
                'password' => 'managerpassword',
                'role' => 'manager'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@gen.com',
                'password' => 'adminpassword',
                'role' => 'administrator'
            ],
        ];

        foreach ($users as $user) {
            $user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => Hash::make($user['password']),
                'created_at' => now()
            ]);
            $user->assignRole(Role::firstWhere('name', $user['role']));
        }
    }
}
