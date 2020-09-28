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
            // 'description' => $this->description,
            'recipes_count' => $this->recipes_count,
            'recipes' => $this->whenLoaded('recipes'),

            'revs_count' => $this->revs_count,
            'revs' => $this->whenLoaded('revs'),
            'rev' => $this->whenLoaded('rev'),

            // 'portion_total' => $this->whenLoaded(
            //     'portions',
            //     $this->portions->reduce(function ($carry, $item) {
            //         return $carry + $item->portion;
            //     })
            // ),
            // 'price_total' => $this->whenLoaded(
            //     'portions',
            //     $this->portions->reduce(function ($carry, $item) {
            //         $value = 0;
            //         if ($material = $item->material) {
            //             if ($rev = $material->revs->first()) {
            //                 $value = ($rev->price * $item->portion / 100);
            //             }
            //         }
            //         return $carry + $value;
            //     })
            // ),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
