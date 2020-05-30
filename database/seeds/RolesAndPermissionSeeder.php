<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'products.view']);
        Permission::create(['name' => 'products.create']);
        Permission::create(['name' => 'products.edit']);
        Permission::create(['name' => 'products.delete']);
        Permission::create(['name' => 'products.*']);

        Permission::create(['name' => 'formulas.view']);
        Permission::create(['name' => 'formulas.create']);
        Permission::create(['name' => 'formulas.edit']);
        Permission::create(['name' => 'formulas.delete']);
        Permission::create(['name' => 'formulas.*']);

        Permission::create(['name' => 'users.view']);
        Permission::create(['name' => 'users.create']);
        Permission::create(['name' => 'users.edit']);
        Permission::create(['name' => 'users.delete']);
        Permission::create(['name' => 'users.*']);

        // create roles
        $role = Role::create(['name' => 'inputor']);
        $role->givePermissionTo('products.*');

        $role = Role::create(['name' => 'manager']);
        $role->givePermissionTo(['products.*', 'formulas.*']);

        $role = Role::create(['name' => 'administrator']);
        $role->givePermissionTo(Permission::all());
    }
}
