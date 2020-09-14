<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MaterialStoryRequest extends FormRequest
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
            'material_id' => [
                'required',
                'integer',
                'min:1',
                'exists:materials,id'
            ],
            'price' => [
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
