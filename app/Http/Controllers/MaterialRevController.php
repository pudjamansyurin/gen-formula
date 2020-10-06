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

        // check: at least 1 existing
        if (MaterialRev::find($revsId[0])->material->revs->count() <= 1) {
            return response([
                'message' => "At least 1 price exist!"
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        // delete
        MaterialRev::destroy($revsId);
        return response($revsId, Response::HTTP_OK);
    }
}
