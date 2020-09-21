<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserItem;
use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Response;

class UserController extends Controller
{
    private $relations = ['roles:id,name'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', User::class);

        // retrieve
        $q = User::with($this->relations)
            ->filtered()
            ->sortered();
        $total = $q->count();

        // Response
        return (new UserCollection($q->limited()->get()))
            ->additional([
                'total' => $total
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
        $this->authorize('create', User::class);

        // create
        $user = User::create($request->validated());

        // add role
        if ($role = Role::find($request->role['id'])) {
            $user->syncRoles($role);
        }

        // send email verification
        $user->sendEmailVerificationNotification();

        return response(
            new UserItem(
                $user->loadMissing($this->relations)
            ),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        $this->authorize('update', $user);

        // on email changes
        $user->unVerifyChangedEmail($request);

        // update
        $user->update($request->validated());

        // update role
        if ($role = Role::find($request->role['id'])) {
            $user->syncRoles($role);
        }

        // send email verification
        if (!$user->hasVerifiedEmail()) {
            $user->sendEmailVerificationNotification();
        }

        return response(
            new UserItem(
                $user->loadMissing($this->relations)
            ),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $usersId = $request->ids;
        $this->authorize('delete', [User::class, $usersId]);

        // delete
        User::destroy($usersId);

        return response($usersId, Response::HTTP_OK);
    }

    /**
     * Get profile
     */
    public function profile(Request $request)
    {
        return response([
            'user' => new UserItem(
                $request->user()->loadMissing($this->relations)
            ),
        ], Response::HTTP_OK);
    }

    /**
     * Get roles
     */
    public function role()
    {
        $this->authorize('role', User::class);

        return response([
            'data' => Role::all(['id', 'name'])
        ], Response::HTTP_OK);
    }
}
