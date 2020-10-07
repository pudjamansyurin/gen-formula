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
        if ($recipes = request($array)) {
            // validate
            $total = array_reduce($recipes, function ($carry, $recipe)  use ($field) {
                return $carry + $recipe[$field];
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
        if ($recipes = request($array)) {
            foreach ($recipes as $key => $recipe) {
                // check class
                $recipeClass = resolve($recipe["{$polymorphic}_type"]);
                if (!$recipeClass) {
                    $validator->errors()
                        ->add("{$array}.{$key}.{$polymorphic}_type", 'Polymorphic type is not valid.');
                    return;
                } else {
                    // check model
                    $recipeModel = $recipeClass->find($recipe["{$polymorphic}_id"]);
                    if (!$recipeModel) {
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
        if ($recipes = request($array)) {
            $key = 0;
            $grouped = array_reduce($recipes, function ($carry, $item) use (&$key, $validator, $array, $polymorphic) {
                $uniqueKey = $item['recipeable_type'] . $item['recipeable_id'];

                if (isset($carry[$uniqueKey])) {
                    // duplicate
                    $validator->errors()
                        ->add("{$array}.{$key}.{$polymorphic}_id", 'Polymorphic is not unique.');
                } else {
                    // unique
                    $carry[$uniqueKey] = $item;
                }

                $key++;
                return $carry;
            }, []);
        }
    }
}
