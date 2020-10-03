<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Gate;

class PackItem extends JsonResource
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
            'packer_id' => $this->packer_id,
            'packer' => new PackerItem($this->whenLoaded('packer')),
            'packagers_count' => $this->packagers_count,

            'updated_at' => $this->updated_at,
            'user' => $this->whenLoaded('user'),
            'authorized' => Gate::allows('update', $this->resource)
        ];
    }
}
