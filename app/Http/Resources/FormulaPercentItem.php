<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FormulaPercentItem extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'formula_id' => $this->formula_id,
            'product_id' => $this->product_id,
            'percent' => $this->updated_at,
            'user' => $this->user,
            'product' => $this->product,
        ];
    }
}
