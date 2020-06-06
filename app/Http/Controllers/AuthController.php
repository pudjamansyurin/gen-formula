<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    // /**
    //  * See: https://github.com/laravel/airlock#authenticating-mobile-applications.
    //  * @param Request $request
    //  * @return mixed
    //  * @throws ValidationException
    //  */
    // public function login(Request $request)
    // {
    //     // validate inputs
    //     // $this->validator($request->all())->validate();

    //     // $user = User::where('email', $request->email)->first();
    //     // if (!$user) {
    //     //     throw ValidationException::withMessages([
    //     //         'email' => ['The provided credentials are incorrect.'],
    //     //     ]);
    //     // }

    //     // if (!Hash::check($request->password, $user->password)) {
    //     //     throw ValidationException::withMessages([
    //     //         'password' => ['The provided credentials are incorrect.'],
    //     //     ]);
    //     // }
    // }

    /**
     * Handle a login request to the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = $this->sanctumUser();

            $this->authenticated($request, $user);

            return response([
                'user' => $user,
                'token' => $user->createToken(now())->plainTextToken
            ], 200);
        };

        return response([
            'message' => 'Your credentials are incorrect.'
        ], 422);
    }

    /**
     * Log a user out.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $user = $this->sanctumUser();

        $user->tokens()->delete();

        $this->loggedOut($request);

        return response([
            'message' => 'Logged out successfully'
        ], 200);
    }

    /**
     * Log a user out.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function check()
    {
        // no validation, already handled by middleware
        return response([
            'message' => 'Logged in successfully'
        ], 200);
    }


    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        $user->forceFill([
            'last_at' => now(),
            'last_ip' => $request->getClientIp()
        ])->save();
    }

    /**
     * The user has logged out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed
     */
    protected function loggedOut(Request $request)
    {
        //
    }

    protected function sanctumUser()
    {
        return User::where('email', Auth::user()->email)->first();
    }
}
