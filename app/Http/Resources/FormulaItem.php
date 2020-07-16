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
        ];
    }
}