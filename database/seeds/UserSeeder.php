<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'admin@gen-formula.com',
                'role_id' => DB::table('roles')->where('name', 'ADMIN')->value('id'),
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gen-formula.com',
                'role_id' => DB::table('roles')->where('name', 'MANAGER')->value('id'),
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
            [
                'name' => 'Editor',
                'email' => 'editor@gen-formula.com',
                'role_id' => DB::table('roles')->where('name', 'EDITOR')->value('id'),
                'password' => Hash::make('userpassword'),
                'created_at' => now()
            ],
        ]);
    }
}
