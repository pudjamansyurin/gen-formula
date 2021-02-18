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
            'id' => (int) $this->id,
            'name' => $this->name,
            // 'description' => $this->description,
            'main' => $this->main,
            'density' => $this->density,
            'shrink' => $this->shrink,

            'recipes_count' => (int) $this->recipes_count,
            'recipes' => $this->whenLoaded('recipes'),

            'revs_count' => (int) $this->revs_count,
            'revs' => $this->whenLoaded('revs'),
            'rev' => $this->whenLoaded('rev'),

            'parents' => $this->whenLoaded('revs', function () {
                return $this->getRecipe('parents', $this->id);
            }),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
