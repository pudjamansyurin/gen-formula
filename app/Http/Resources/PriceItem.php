<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PriceItem extends JsonResource
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
            'product_id' => $this->product_id,
            'price' => $this->price,
            'changed_at' => $this->changed_at,
            'user' => new UserItem($this->whenLoaded('user')),
            'product' => new ProductItem($this->whenLoaded('product')),
        ];
    }
}
