<?php

namespace App\Http\Requests;

use App\Package;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SaleRequest extends FormRequest
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
                Rule::unique('sales', 'name')->ignore($this->sale)
            ],
            'filled' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
                'max:100',
            ],
            '_products' => [
                'required',
                'array'
            ],
            '_products.*.package_id' => [
                'required',
                'integer',
                'distinct',
                'exists:packages,id'
            ],
            // '_products.1.package_id' => [
            //     'sometimes',
            //     function ($attribute, $value, $fail) {
            //         $firstPackageUnit = Package::with('unit')->find(request('_products.0.package_id'))->unit;
            //         $secondPackageUnit = Package::with('unit')->find($value)->unit;

            //         if ($secondPackageUnit->id != $firstPackageUnit->id) {
            //             $fail($attribute . ' should not different.');
            //         }
            //     },
            // ],
            '_products.*.formula_id' => [
                'required',
                'integer',
                'distinct',
                'exists:formulas,id'
            ],
            '_products.*.ratio' => [
                'required',
                'integer',
                'min:1',
            ],
        ];
    }
}
