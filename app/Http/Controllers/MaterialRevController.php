<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\MaterialRev;
use Illuminate\Http\Response;

class MaterialRevController extends Controller
{
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MaterialRev  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $revsId = $request->ids;
        $this->authorize('delete', [MaterialRev::class, $revsId]);

        // delete (if not the last one)
        $rev = MaterialRev::getById($revsId[0]);
        if ($rev->material->revs->count() > 1) {
            MaterialRev::destroy($revsId);

            return response($revsId, Response::HTTP_OK);
        }
        return response([], Response::HTTP_BAD_REQUEST);
    }
}
