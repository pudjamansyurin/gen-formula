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
                'max:25',
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
                'max:9999999999999.99'
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
