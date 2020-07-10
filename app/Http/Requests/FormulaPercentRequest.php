<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormulaPercentRequest extends FormRequest
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
            'formula' => [
                'required',
                'array',
            ],
            'formula.*.product_id' => [
                'integer',
                'min:1',
                'distinct',
                'exists:products,id'
            ],
            'formula.*.percent' => [
                'integer',
                'min:1',
                'max:100'
            ]
        ];
    }
}
