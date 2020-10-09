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

    public function attributes()
    {
        return [
            '_products' => 'products',
            '_products.*.package_id' => 'package',
            '_products.*.formula_id' => 'formula',
            '_products.*.ratio' => 'ratio',
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
                $this->validateSingleRatio($validator);
                $this->validateMultiFilled($validator);
                $this->validateDifferentUnit($validator);
                $this->validateMultiRatio($validator);
            });
        }
    }

    private function validateSingleRatio($validator)
    {
        if ($products = request('_products')) {
            if (count($products) == 1) {
                if (request('_products.0.ratio') != 1) {
                    $validator->errors()
                        ->add("_products.0.ratio", 'Ratio for 1 components should be 1.');
                }
            }
        }
    }

    private function validateMultiFilled($validator)
    {
        if ($products = request('_products')) {
            if (count($products) > 1) {
                if (request('filled') != 100) {
                    $validator->errors()
                        ->add("filled", 'Filled for 2 components should be 100.');
                }
            }
        }
    }

    private function validateDifferentUnit($validator)
    {
        if ($products = request('_products')) {
            if (count($products) > 1) {
                $package = array_map(function ($item) {
                    return Package::find($item['package_id']);
                }, $products);

                if ($package[1]->unit_id != $package[0]->unit_id) {
                    $validator->errors()
                        ->add("_products.1.package_id", 'Second package unit may not different.');
                }
            }
        }
    }

    private function validateMultiRatio($validator)
    {
        if ($products = request('_products')) {
            if (count($products) > 1) {
                $saleRatio = array_reduce($products, function ($carry, $item) {
                    return $carry + $item['ratio'];
                }, 0);

                $saleCapacity = null;
                foreach ($products as $key => $item) {
                    $pkg = Package::find($item['package_id']);

                    if (is_null($saleCapacity)) {
                        $saleCapacity = $pkg->capacity;
                    }

                    $filled = ($item['ratio'] * $saleCapacity) / $saleRatio;

                    if ($filled > $pkg->capacity) {
                        $validator->errors()
                            ->add("_products.{$key}.ratio", 'Filled may not greater than capacity.');
                    }
                }
            }
        }
    }
}
