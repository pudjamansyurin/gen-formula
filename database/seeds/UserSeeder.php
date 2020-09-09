<?php

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
                'password' => 'inputorpass',
                'role' => 'inputor'
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gen.com',
                'password' => 'managerpass',
                'role' => 'manager'
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@gen.com',
                'password' => 'adminpass',
                'role' => 'admin'
            ],
        ];

        foreach ($users as $user) {
            $the_user = App\User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => $user['password']
            ]);
            $the_user->assignRole(Role::firstWhere('name', $user['role']));
        }
    }
}
