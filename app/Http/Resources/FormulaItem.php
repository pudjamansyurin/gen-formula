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
            'percents' => PercentItem::collection($this->whenLoaded('percents')),
            'percent_total' => $this->whenLoaded('percents', function () {
                return $this->percents->reduce(function ($total, $item) {
                    return $total + $item->percent;
                }, 0);
            }),
            'price_total' => $this->whenLoaded('percents', function () {
                $total =  $this->percents->reduce(function ($total, $item) {
                    $value = 0;
                    if ($product = $item->product) {
                        if ($price = $product->prices->first()) {
                            $value = ($price->price * $item->percent / 100);
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
