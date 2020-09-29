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
            ],
            '_recipes' => [
                'required',
                'array'
            ],
            '_recipes.*.recipeable_id' => [
                'required',
                'integer',
                'distinct',
                // 'exists:packers,id'
            ],
            '_recipes.*.recipeable_type' => [
                'required',
                Rule::in([Material::class, Formula::class]),
                // 'integer',
                // 'distinct',
                // 'exists:packers,id'
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
            if ($this->calcPortionTotal() != 100) {
                $validator->errors()
                    ->add('portion_total', 'Total portion should be 100%.');
            }
        });
    }

    private function calcPortionTotal()
    {
        $recipes = request('_recipes');

        return array_reduce($recipes, function ($carry, $recipe) {
            return $carry + $recipe['portion'];
        }, 0);
    }
}
