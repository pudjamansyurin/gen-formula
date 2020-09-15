<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\MaterialStory;
use Illuminate\Http\Response;

class MaterialStoryController extends Controller
{
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MaterialStory  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $storyId = $request->ids;
        $this->authorize('delete', [MaterialStory::class, $storyId]);

        MaterialStory::destroy($storyId);
        return response($storyId, Response::HTTP_OK);
    }
}
