<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FormulaRequest extends FormRequest
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
                Rule::unique('formulas', 'name')->ignore($this->formula)
            ],
            // 'description' => [
            //     'min:5'
            // ],
            'density' => [
                'numeric',
                'min:0',
                'max:1',
                'not_in:0',
            ],
            'shrink' => [
                'numeric',
                'min:0',
                'max:100',
            ],
        ];
    }
}
