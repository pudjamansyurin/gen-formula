<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'min:3',
                Rule::unique('users', 'name')->ignore(auth()->user())
            ],
            'email'   => [
                'required',
                'email:rfc,dns',
                Rule::unique('users', 'email')->ignore(auth()->user())
            ],
            'password' => [
                'sometimes',
                'min:8',
                'confirmed'
            ]
        ];
    }
}
