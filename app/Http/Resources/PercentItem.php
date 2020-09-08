<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PercentItem extends JsonResource
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
            'material_id' => $this->material_id,
            'percent' => $this->percent,
            'material' => new MaterialItem($this->whenLoaded('material')),
        ];
    }
}
