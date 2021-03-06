<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class MaterialItem extends JsonResource
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
            'name' => $this->name,

            'formulas_count' => $this->formulas_count,

            'matter_id' => $this->matter_id,
            'matter' => new MatterItem($this->whenLoaded('matter')),

            'revs_count' => $this->revs_count,
            'revs' => MaterialRevItem::collection($this->whenLoaded('revs')),
            'rev' => $this->whenLoaded('rev'),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
