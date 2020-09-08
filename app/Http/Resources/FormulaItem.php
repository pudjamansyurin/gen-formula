<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class FormulaItem extends JsonResource
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
            'portions' => PortionItem::collection($this->whenLoaded('portions')),
            'portion_total' => $this->whenLoaded('portions', function () {
                return $this->portions->reduce(function ($total, $item) {
                    return $total + $item->portion;
                }, 0);
            }),
            'price_total' => $this->whenLoaded('portions', function () {
                $total =  $this->portions->reduce(function ($total, $item) {
                    $value = 0;
                    if ($material = $item->material) {
                        if ($price = $material->prices->first()) {
                            $value = ($price->price * $item->portion / 100);
                        }
                    }
                    return $total + $value;
                }, 0);

                return $total;
            }),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
