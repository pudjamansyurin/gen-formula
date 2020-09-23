<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserItem extends JsonResource
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
            'email' => $this->email,
            'last_at' => $this->last_at,
            'last_ip' => $this->last_ip,
            'email_verified_at' => $this->email_verified_at,
            'role_id' => $this->whenLoaded(
                'roles',
                $this->roles->first()->id
            ),
            'role' => $this->whenLoaded(
                'roles',
                $this->roles->first()
            ),

            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'authorized' => $this->id != auth()->id(),
        ];
    }
}
