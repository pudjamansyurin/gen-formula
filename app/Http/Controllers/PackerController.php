<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\PackerRequest;
use App\Http\Resources\PackerItem;
use App\Packer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class PackerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Packer::class);

        // retrieve
        [$packers, $total] = Packer::queried();

        // Response
        return (PackerItem::collection($packers))
            ->additional(['total' => $total]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PackerRequest $request)
    {
        $this->authorize('create', Packer::class);

        // create
        $packer = Packer::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return response(
            new PackerItem($packer->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Packer  $packer
     * @return \Illuminate\Http\Response
     */
    public function update(PackerRequest $request, Packer $packer)
    {
        $this->authorize('update', $packer);

        // update
        $packer->update($request->validated());

        return response(
            new PackerItem($packer->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Packer  $packer
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $packersId = $request->ids;
        $this->authorize('delete', [Packer::class, $packersId]);

        // check: relations
        if ($response = Packer::rejectWhenHas($packersId, ['packages', 'packs'])) {
            return $response;
        }

        // delete
        Packer::destroy($packersId);
        return response($packersId, Response::HTTP_OK);
    }

    /**
     * Get lists of this model
     */
    public function list()
    {
        $this->authorize('viewAny', Packer::class);

        return response([
            'data' => Packer::getAsListWithPacks()
        ], Response::HTTP_OK);
    }
}
