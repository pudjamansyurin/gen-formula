<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Http\Resources\UserItem;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Role;

class ProfileController extends Controller
{

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $me = $request->user();

        return response(
            new UserItem($me->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(ProfileRequest $request)
    {
        $this->authorize('profile', User::class);

        $me = $request->user();

        // on email changes
        $me->unVerifyChangedEmail();

        // update
        $me->update($request->validated());

        // send email verification
        if (!$me->hasVerifiedEmail()) {
            $me->sendEmailVerificationNotification();
        }

        return response(
            new UserItem($me->loadRelation()),
            Response::HTTP_OK
        );
    }
}
