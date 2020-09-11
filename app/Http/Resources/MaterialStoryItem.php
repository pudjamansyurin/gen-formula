<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class MaterialStoryItem extends JsonResource
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
            'material_id' => $this->material_id,
            'price' => $this->price,
            'user' => new UserItem($this->whenLoaded('user')),
            'material' => new MaterialItem($this->whenLoaded('material')),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
