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
        $storiesId = $request->ids;
        $this->authorize('delete', [MaterialStory::class, $storiesId]);

        $story = MaterialStory::with('material', 'material.stories')->find($storiesId[0]);
        $storiesCount = $story->material->stories->count();

        if ($storiesCount > 1) {
            MaterialStory::destroy($storiesId);
            return response($storiesId, Response::HTTP_OK);
        }
        return response([], Response::HTTP_BAD_REQUEST);
    }
}
