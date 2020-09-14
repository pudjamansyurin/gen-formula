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
            'matter_id' => $this->matter_id,
            'matter' => new MatterItem($this->whenLoaded('matter')),
            'stories' => MaterialStoryItem::collection($this->whenLoaded('stories')),
            'price' => $this->whenLoaded('stories', function () {
                if ($story = $this->stories->first()) {
                    return $story->price;
                }
                return 0;
            }),

            'updated_at' => $this->updated_at->format('Y-m-d'),
            'user' => new UserItem($this->whenLoaded('user')),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
