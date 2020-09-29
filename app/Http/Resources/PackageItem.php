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
            'unit' => $this->whenLoaded('unit'),

            'packagers_count' => $this->packagers_count,
            'packagers' => $this->whenLoaded('packagers'),
            '_packers' => [],

            'revs_count' => $this->revs_count,
            'revs' => $this->whenLoaded('revs'),
            'rev' => $this->whenLoaded('rev'),

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
