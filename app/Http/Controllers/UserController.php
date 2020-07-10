<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->authorizeResource(User::class, 'user');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Model instance
        $q = new User;
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);

        // Response
        return (new UserCollection($q->get()))
            ->additional([
                'meta' => [
                    'total' => $total
                ]
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserRequest $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => 'required|string|min:8|confirmed',
        // ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make('password')
        ]);

        // add role
        $role = Role::find($request->role['id']);
        if ($role) {
            $user->syncRoles($role);
        }

        return response(
            new UserItem($user),
            Response::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return response(
            new UserItem($user),
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        // change role
        $role = Role::find($request->role['id']);
        if ($role) {
            $user->syncRoles($role);
        }

        return response(
            new UserItem($user->refresh()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ids = $request->ids;
        if (is_array($ids)) {
            User::destroy($ids);
            return response($ids, Response::HTTP_OK);
        }
        return response($ids, Response::HTTP_BAD_REQUEST);
    }
}
