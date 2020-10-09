<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MaterialRequest extends FormRequest
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
                Rule::unique('materials', 'name')->ignore($this->material)
            ],
            'matter_id' => [
                'required',
                'integer',
                'exists:matters,id'
            ],
            'rev.price' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
            ],
        ];
    }

    public function attributes()
    {
        return [
            'matter_id' => 'matter',
            'rev.price' => 'price'
        ];
    }
}
