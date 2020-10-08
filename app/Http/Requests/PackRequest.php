<?php

namespace App\Http\Requests;

use App\Pack;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PackRequest extends FormRequest
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
                Rule::unique('packs', 'name')->ignore($this->pack)
            ],
            'packer_id' => [
                'required',
                'integer',
                'exists:packers,id'
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
            $this->validateHasPackageChangePacker($validator);
        });
    }

    private function validateHasPackageChangePacker($validator)
    {
        $packerId = request('packer_id');

        if ($id = request('id')) {
            if ($pack = Pack::has('packagers')->find($id)) {
                if ($pack->packer_id != $packerId) {
                    $validator->errors()->add("packer_id", "Still used by package.");
                }
            }
        }
    }
}
