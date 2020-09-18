<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class PackageItem extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'capacity' => $this->capacity,
            'unit_id' => $this->unit_id,
            'unit' => $this->whenLoaded(
                'unit',
                $this->unit->toArray()
            ),
            'packagers_count' => $this->packagers_count,
            'stories' => $this->whenLoaded('stories'),
            'stories_count' => $this->stories_count,
            'stories_price' => $this->whenLoaded(
                'stories',
                $this->stories->first()->price
            ),

            'updated_at' => $this->updated_at,
            'user' => new UserItem($this->whenLoaded('user')),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
