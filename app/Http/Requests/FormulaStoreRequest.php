<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FormulaStoreRequest extends FormRequest
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
                Rule::unique('formulas', 'name')->ignore($this->formula)
            ],
            'description' => [
                'required',
                'min:5'
            ],
            'products' => [
                'sometimes',
                'array'
            ],
            'products.*.id' => [
                'integer',
                'min:1',
                'distinct',
                'exists:products,id'
            ],
            'products.*.percent' => [
                'min:1',
                'max:100'
            ]
        ];
    }
}
