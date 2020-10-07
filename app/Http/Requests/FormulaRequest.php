<?php

namespace App\Http\Requests;

use App\Formula;
use App\Material;
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
                'required',
                'min:3',
                Rule::unique('formulas', 'name')->ignore($this->formula)
            ],
            'main' => [
                'required',
                'boolean'
            ],
            'density' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
                'max:1',
            ],
            'shrink' => [
                'required',
                'numeric',
                'min:0',
                'max:100',
                'not_in:100',
            ],
            '_recipes' => [
                'required',
                'array'
            ],
            '_recipes.*.recipeable_id' => [
                'required',
                'integer',
            ],
            '_recipes.*.recipeable_type' => [
                'required',
                Rule::in([Material::class, Formula::class]),
            ],
            '_recipes.*.portion' => [
                'required',
                'numeric',
                'min:0',
                'not_in:0',
                'max:100',
            ],
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
        $validator->after(function ($validator) {
            $this->validateSumTotal($validator,  '_recipes', 'portion', 100);
            $this->validateExistPolymorphic($validator, '_recipes', 'recipeable');
            $this->validateDistinctPolymorphic($validator, '_recipes', 'recipeable');
        });
    }

    private function validateSumTotal($validator, $array, $field, $value)
    {
        if ($items = request($array)) {
            // validate
            $total = array_reduce($items, function ($carry, $item)  use ($field) {
                return $carry + $item[$field];
            }, 0);

            // add error message
            if ($total != $value) {
                $validator->errors()
                    ->add("{$array}_{$field}", "Total {$field} should be {$value}.");
            }
        }
    }

    private function validateExistPolymorphic($validator, $array, $polymorphic)
    {
        if ($items = request($array)) {
            foreach ($items as $key => $item) {
                // check class
                $itemClass = resolve($item["{$polymorphic}_type"]);
                if (!$itemClass) {
                    $validator->errors()
                        ->add("{$array}.{$key}.{$polymorphic}_type", 'Polymorphic type is not valid.');
                    return;
                } else {
                    // check model
                    $itemModel = $itemClass->find($item["{$polymorphic}_id"]);
                    if (!$itemModel) {
                        $validator->errors()
                            ->add("{$array}.{$key}.{$polymorphic}_id", 'Polymorphic is not valid.');
                        return;
                    }
                }
            }
        }
    }

    private function validateDistinctPolymorphic($validator, $array, $polymorphic)
    {
        if ($items = request($array)) {
            $group = [];
            foreach ($items as $key => $item) {
                $uniqueKey = $item['recipeable_type'] . $item['recipeable_id'];

                if (isset($group[$uniqueKey])) {
                    $validator->errors()
                        ->add("{$array}.{$key}.{$polymorphic}_id", 'Polymorphic is not unique.');
                } else {
                    $group[$uniqueKey] = $item;
                }
            }
        }
    }
}
