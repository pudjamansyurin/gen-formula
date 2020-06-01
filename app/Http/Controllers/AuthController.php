<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * See: https://github.com/laravel/airlock#authenticating-mobile-applications.
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'password' => ['The provided credentials are incorrect.'],
            ]);
        }

        $response = [
            'user' => $user,
            'token' => $user->createToken(now())->plainTextToken
        ];

        return response($response, 200);
    }

    /**
     * Log a user out.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $user = auth()->user();

        foreach ($user->tokens as $token) {
            $token->delete();
        }

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
}
