<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\MaterialStory;
use Illuminate\Http\Response;

class MaterialStoryController extends Controller
{
    private $modelRelations = ['material', 'material.stories'];

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MaterialStory  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $storiesId = $request->ids;
        $this->authorize('delete', [MaterialStory::class, $storiesId]);

        // delete (if not the last one)
        $story = MaterialStory::with($this->modelRelations)->find($storiesId[0]);
        if ($story->material->stories->count() > 1) {
            MaterialStory::destroy($storiesId);

            return response($storiesId, Response::HTTP_OK);
        }
        return response([], Response::HTTP_BAD_REQUEST);
    }
}
