<?php

use App\User;
use Illuminate\Database\Seeder;
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
                'password' => '@Inputor123',
                'role' => 'inputor'
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gen.com',
                'password' => '@Manager123',
                'role' => 'manager'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@gen.com',
                'password' => '@Admin123',
                'role' => 'admin'
            ],
        ];

        foreach ($users as $user) {
            $theUser = User::withoutEvents(function () use ($user) {
                return User::create([
                    'name' => $user['name'],
                    'email' => $user['email'],
                    'password' => $user['password']
                ]);
            });

            $role = Role::firstWhere('name', $user['role']);
            $theUser->assignRole($role);
        }
    }
}
