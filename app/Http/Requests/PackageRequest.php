<?php

namespace App\Http\Requests;

use App\Package;
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
                'required',
                'min:3',
                'max:25',
                Rule::unique('packages', 'name')->ignore($this->package)
            ],
            'unit_id' => [
                'required',
                'integer',
                'exists:units,id'
            ],
            'capacity' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
            ],
            '_packers' => [
                'required',
                'array'
            ],
            '_packers.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:packers,id'
            ],
            '_packers.*.content' => [
                'required',
                'integer',
                'min:1',
            ],
            '_packers.*.packs' => [
                'required',
                'array'
            ],
            '_packers.*.packs.*.id' => [
                'required',
                'integer',
                'distinct',
                'exists:packs,id'
            ],
            '_packers.*.packs.*.price' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
                'max:9999999999999.99'
            ]
        ];
    }

    public function attributes()
    {
        return [
            'unit_id' => 'unit',
            '_packers' => 'packers',
            '_packers.*.id' => 'packer',
            '_packers.*.content' => 'content',
            '_packers.*.packs' => 'packs',
            '_packers.*.packs.*.id' => 'pack',
            '_packers.*.packs.*.price' => 'price',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        if (!$validator->fails()) {
            $validator->after(function ($validator) {
                $this->validateHasPackageChangeUnitAndCapacity($validator);
            });
        }
    }

    private function validateHasPackageChangeUnitAndCapacity($validator)
    {
        $unitId = request('unit_id');
        $capacity = request('capacity');

        if ($id = request('id')) {
            if ($package = Package::has('sales')->find($id)) {
                if ($package->unit_id != $unitId) {
                    $validator->errors()->add("unit_id", "Still used by sale as product.");
                }

                if ($package->capacity != $capacity) {
                    $validator->errors()->add("capacity", "Still used by sale as product.");
                }
            }
        }
    }
}
