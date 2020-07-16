<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserItem;
use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
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
    public function store(UserStoreRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        // add role
        if ($role = Role::find($request->role['id'])) {
            $user->syncRoles($role);
        }

        // send email verification
        $user->sendEmailVerificationNotification();

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
    public function update(UserUpdateRequest $request, User $user)
    {
        // send email verification
        if ($user->email != $request->email) {
            $user->markEmailAsUnVerified();
            $user->sendEmailVerificationNotification();
        }
        // prepare the data
        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        };


        // update user
        $user->update($data);

        // change role
        if ($role = Role::find($request->role['id'])) {
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

    /**
     * Get list of roles as options
     */
    public function role()
    {
        return response([
            'data' => Role::all()
        ], Response::HTTP_OK);
    }
}
