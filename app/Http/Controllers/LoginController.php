<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
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

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken($request->device_name)->plainTextToken;
        $data = ['token' => $token];

        return response()->json($data, 200);
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

        return response()->json('Logged out successfully', 200);
    }
}
