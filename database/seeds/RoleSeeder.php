<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [ 'priority' => 1, 'name' => 'ADMIN', 'description' => 'Administrator' ],
            [ 'priority' => 2, 'name' => 'MANAGER', 'description' => 'Manager' ],
            [ 'priority' => 3, 'name' => 'EDITOR', 'description' => 'Editor' ],
        ]);
    }
}
