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
            'revs_count' => $this->revs_count,
            'matter_id' => $this->matter_id,
            'matter' => new MatterItem($this->whenLoaded('matter')),


            'revs' => MaterialRevItem::collection($this->whenLoaded('revs')),
            'revs_price' => $this->whenLoaded(
                'revs',
                optional($this->revs->first())->price
            ),


            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
