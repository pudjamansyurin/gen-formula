<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\MatterRequest;
use App\Http\Resources\MatterCollection;
use App\Http\Resources\MatterItem;
use App\Matter;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MatterController extends Controller
{
    /**
     * Get lists of this model
     */
    public function list()
    {
        $this->authorize('viewAny', Matter::class);

        return response([
            'data' => Matter::getAsList()
        ], Response::HTTP_OK);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Matter::class);

        // retrieve
        [$matters, $total] = Matter::queried();

        // Response
        return (new MatterCollection($matters))
            ->additional(['total' => $total]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MatterRequest $request)
    {
        $this->authorize('create', Matter::class);

        // create
        $matter = Matter::create(
            array_merge(
                $request->validated(),
                ['user_id' => auth()->id()]
            )
        );

        return response(
            new MatterItem($matter->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function update(MatterRequest $request, Matter $matter)
    {
        $this->authorize('update', $matter);

        // update
        $matter->update($request->validated());

        return response(
            new MatterItem($matter->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $mattersId = $request->ids;
        $this->authorize('delete', [Matter::class, $mattersId]);

        // delete
        Matter::destroy($mattersId);

        return response($mattersId, Response::HTTP_OK);
    }
}
