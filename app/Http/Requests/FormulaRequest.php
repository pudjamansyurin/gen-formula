<?php

namespace App\Http\Requests;

use App\Formula;
use App\Material;
use App\Traits\Validators\ExtendedValidator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FormulaRequest extends FormRequest
{
    use ExtendedValidator;

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

    public function attributes()
    {
        return [
            '_recipes' => 'recipes',
            '_recipes.*.recipeable_id' => 'recipe',
            '_recipes.*.recipeable_type' => 'recipe type',
            '_recipes.*.portion' => 'portion'
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
                $this->validateSum($validator,  '_recipes', 'portion', 100);
                $this->validatePolymorphicExist($validator, '_recipes', 'recipeable');
                $this->validatePolymorphicDistinct($validator, '_recipes', 'recipeable');
                $this->validateMainFormulaAsRecipe($validator);
                $this->validateHasSaleChangeMain($validator);
                $this->validateHasParentAsMain($validator);
                $this->validateSelfAsRecipe($validator);
                $this->validateParentAsRecipe($validator);
            });
        }
    }

    private function validateHasSaleChangeMain($validator)
    {
        $main = request('main');

        if ($id = request('id')) {
            if ($formula = Formula::has('sales')->find($id)) {
                if ($formula->main && !$main) {
                    $validator->errors()->add("main", "Still used by sale as product.");
                }
            }
        }
    }

    private function validateParentAsRecipe($validator)
    {
        if ($id = request('id')) {
            if ($formula = Formula::find($id)) {
                $parents = $formula->getRecipe('parents', $formula->id);

                if ($recipes = request('_recipes')) {
                    $recipeFormulas = $this->getRecipeableFormulas($recipes);

                    foreach ($recipeFormulas as $key => $recipeFormula) {
                        if (in_array($recipeFormula['recipeable_id'], $parents->flatten)) {
                            $target = "_recipes.{$key}.recipeable_id";
                            $validator->errors()->add($target, "Can not use parent as recipe.");
                        }
                    }
                }
            }
        }
    }

    private function validateSelfAsRecipe($validator)
    {
        if ($id = request('id')) {
            if ($formula = Formula::find($id)) {
                if ($recipes = request('_recipes')) {
                    $recipeFormulas = $this->getRecipeableFormulas($recipes);

                    foreach ($recipeFormulas as $key => $recipeFormula) {
                        if ($formula->id == $recipeFormula['recipeable_id']) {
                            $target = "_recipes.{$key}.recipeable_id";
                            $validator->errors()->add($target, "Can not use self as recipe.");
                            break;
                        }
                    }
                }
            }
        }
    }

    private function validateHasParentAsMain($validator)
    {
        if ($id = request('id')) {
            if ($main = request('main')) {
                if (Formula::has('parents')->find($id)) {
                    $validator->errors()->add("main", "Still used by other formulas.");
                }
            }
        }
    }


    private function validateMainFormulaAsRecipe($validator)
    {
        if ($recipes = request('_recipes')) {
            $recipeFormulas = $this->getRecipeableFormulas($recipes);

            foreach ($recipeFormulas as $key => $recipeFormula) {
                if (Formula::find($recipeFormula['recipeable_id'])->main) {
                    $target = "_recipes.{$key}.recipeable_id";
                    $validator->errors()->add($target, "Main formula may not be used as recipe.");
                }
            }
        }
    }

    private function getRecipeableFormulas($recipes)
    {
        return array_filter($recipes, function ($recipe) {
            return $recipe['recipeable_type'] == Formula::class;
        });
    }
}
