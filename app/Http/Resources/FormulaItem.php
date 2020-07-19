<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'user' => $this->user,
            'percents' => $this->percents,
            'total_price' => $this->whenLoaded('percents', function () {
                $total =  $this->percents->reduce(function ($total, $item) {
                    $value = 0;
                    if ($latest = $item->product->prices->first()) {
                        $value = ($latest->price * $item->percent / 100);
                    }
                    return $total + $value;
                }, 0);

                return $total;
            })
        ];
    }
}
