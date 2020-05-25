<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Role;
use App\DataTables\UserDataTable;

class UserController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(UserDataTable $dataTable)
    {
        $roles = Cache::remember('roles', 3600, function() {
            return Role::all();
        })->sortByDesc('priority');

        return $dataTable->render('user.index', [
            'roles' => $roles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        app('debugbar')->error($_POST);

        $validator = Validator::make($request->all(), [
            'user_id' => 'nullable|integer',
            'name' => 'required|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'role_id' => 'required|integer|exists:roles,id',
            'password' => 'required|string|min:8|confirmed',
        ])->validateWithBag('user');

        if ($validator->fails()) {
            return response()->json($validator->messages(), 200);
        }

        return response()->json(['success'=>'User saved successfully.']);

        // User::updateOrCreate(
        //     ['id' => $request->user_id],
        //     [
        //         'name' => $request->name,
        //         'email' => $request->email
        //     ]
        // );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        User::delete();

        return response()->json(['success'=>'User deleted successfully.']);
    }
}
