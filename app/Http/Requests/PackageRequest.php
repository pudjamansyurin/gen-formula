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
            '_packers' => [
                'required',
                'array'
            ],
            '_packers.*.id' => [
                'integer',
                'distinct',
                'exists:packers,id'
            ],
            '_packers.*.content' => [
                'integer',
                'min:1',
            ],
            '_packers.*.packs' => [
                'required',
                'array'
            ],
            '_packers.*.packs.*.id' => [
                'integer',
                'distinct',
                'exists:packs,id'
            ],
            '_packers.*.packs.*.price' => [
                'numeric',
                'min:0',
                'not_in:0',
            ]
        ];
    }
}
