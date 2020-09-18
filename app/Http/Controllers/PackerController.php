<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\PackerRequest;
use App\Http\Resources\PackerCollection;
use App\Http\Resources\PackerItem;
use App\Packer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackerController extends Controller
{
    private $relations = ['user:id,name', 'packs'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Packer::class);

        // retrieve
        $q = Packer::with($this->relations)->filtered()->sortered();

        // Response
        return (new PackerCollection($q->limited()->get()))
            ->additional([
                'total' => $q->count()
            ]);
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
        $packer = Packer::create(
            array_merge(
                $request->validated(),
                ['user_id' => auth()->id()]
            )
        );

        return response(
            new PackerItem($packer->loadMissing($this->relations)),
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
            new PackerItem($packer->loadMissing($this->relations)),
            Response::HTTP_CREATED
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

        // delete
        Packer::destroy($packersId);

        return response($packersId, Response::HTTP_OK);
    }
}
