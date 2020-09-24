<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PackageRequest extends FormRequest
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
                Rule::unique('packages', 'name')->ignore($this->package)
            ],
            'unit_id' => [
                'required',
                'integer',
                'exists:units,id'
            ],
            'capacity' => [
                'numeric',
                'min:0',
                'not_in:0',
            ],
            'packers' => [
                'required',
                'array'
            ],
            'packers.*.id' => [
                'integer',
                'distinct',
                'exists:packers,id'
            ],
            'packers.*.content' => [
                'integer',
                'min:1',
            ],
            'packers.*.packs' => [
                'required',
                'array'
            ],
            'packers.*.packs.*.id' => [
                'integer',
                'distinct',
                'exists:packs,id'
            ],
            'packers.*.packs.*.price' => [
                'numeric',
                'min:0',
                'not_in:0',
            ]
        ];
    }
}
