<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class ProductItem extends JsonResource
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
            'description' => $this->description,
            'updated_at' => $this->updated_at,
            'user' => new UserItem($this->whenLoaded('user')),
            'prices' => PriceItem::collection($this->whenLoaded('prices')),
            'latest_price' => $this->whenLoaded('prices', function () {
                if ($item = $this->prices->first()) {
                    return $item['price'];
                }
                return 0;
            }),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
