<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\PackRequest;
use App\Http\Resources\PackCollection;
use App\Http\Resources\PackItem;
use App\Pack;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Pack::class);

        // retrieve
        [$packs, $total] = Pack::queried();

        // Response
        return (new PackCollection($packs))
            ->additional(['total' => $total]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PackRequest $request)
    {
        $this->authorize('create', Pack::class);

        // create
        $pack = Pack::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return response(
            new PackItem($pack->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pack  $pack
     * @return \Illuminate\Http\Response
     */
    public function update(PackRequest $request, Pack $pack)
    {
        $this->authorize('update', $pack);

        // update
        $pack->update($request->validated());

        return response(
            new PackItem($pack->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pack  $pack
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $packsId = $request->ids;
        $this->authorize('delete', [Pack::class, $packsId]);

        // check
        if ($response = Pack::rejectWhenHas($packsId, ['packagers'])) {
            return $response;
        }

        // delete
        Pack::destroy($packsId);
        return response($packsId, Response::HTTP_OK);
    }
}
