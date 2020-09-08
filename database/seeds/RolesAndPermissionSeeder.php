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

        $models = [
            'materials',
            'formulas',
            'users'
        ];
        $actions = [
            'view',
            'create',
            'edit',
            'delete',
        ];
        $roles = [
            'inputor' => ['materials'],
            'manager' => ['materials', 'formulas'],
            'admin' => ['materials', 'formulas', 'users']
        ];

        // create permissions
        foreach ($models as $model) {
            foreach ($actions as $action) {
                Permission::create(['name' => "{$model}.{$action}"]);
            }
        }

        // create roles
        foreach ($roles as $role => $models) {
            $theRole = Role::create(['name' => $role]);
            foreach ($models as $model) {
                foreach ($actions as $action) {
                    $theRole->givePermissionTo("{$model}.{$action}");
                }
            }
        }
    }
}
