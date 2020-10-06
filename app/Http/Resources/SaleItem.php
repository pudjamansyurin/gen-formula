<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class SaleItem extends JsonResource
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
            'filled' => $this->filled,

            'products_count' => $this->products_count,
            'products' => $this->whenLoaded('products'),

            'revs_count' => $this->revs_count,
            'revs' => MaterialRevItem::collection($this->whenLoaded('revs')),
            'rev' => $this->whenLoaded('rev'),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
