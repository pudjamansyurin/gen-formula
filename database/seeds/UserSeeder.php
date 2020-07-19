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
                'role' => 'admin'
            ],
        ];

        foreach ($users as $user) {
            $the_user = User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => $user['password'],
                'created_at' => now()
            ]);
            $the_user->assignRole(Role::firstWhere('name', $user['role']));
        }
    }
}
