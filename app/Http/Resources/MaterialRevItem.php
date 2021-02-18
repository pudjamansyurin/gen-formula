<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class MaterialRevItem extends JsonResource
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
            'price' => $this->price,

            'material_id' => $this->material_id,
            'material' => new MaterialItem($this->whenLoaded('material')),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
