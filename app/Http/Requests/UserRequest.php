<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
                'required',
                'min:3',
                Rule::unique('users', 'name')->ignore($this->user)
            ],
            'email'   => [
                'required',
                'email'
            ],
            'role.id' => [
                'required',
                'integer',
                'min:1',
                'exists:roles,id'
            ]
        ];
    }
}
