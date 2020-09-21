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
                'min:1',
                'exists:matters,id'
            ],
            'revs_price' => [
                'required',
                'integer',
                'min:1',
            ],
            // 'updated_at' => [
            //     'required',
            //     'date_format:"Y-m-d"'
            // ]
        ];
    }
}
