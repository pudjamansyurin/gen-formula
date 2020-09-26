<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\MaterialRequest;
use App\Http\Resources\MaterialCollection;
use App\Http\Resources\MaterialItem;
use App\Material;
use App\MaterialRev;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Material::class);

        // retrieve
        [$materials, $total] = Material::queried();

        // Response
        return (new MaterialCollection($materials))
            ->additional(['total' => $total]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function show(Material $material)
    {
        $this->authorize('viewAny', Material::class);

        return response(
            new MaterialItem($material->loadRelationDetailed()),
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MaterialRequest $request)
    {
        $this->authorize('create', Material::class);

        // create
        $material = Material::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        // update revs
        $material->updateRev($request->revs_price);

        return response(
            new MaterialItem($material->loadRelation()),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Material  $material
     * @return \Illuminate\Http\Response
     */
    public function update(MaterialRequest $request, Material $material)
    {
        $this->authorize('update', $material);

        // $fields = ['name', 'matter_id'];

        // update
        // if (array_diff($material->only($fields), $request->only($fields))) {
        $material->update($request->validated());
        // }

        // update revs
        $material->updateRev($request->revs_price);

        return response(
            new MaterialItem($material->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Material $material
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $materialsId = $request->ids;
        $this->authorize('delete', [Material::class, $materialsId]);

        // delete
        Material::destroy($materialsId);

        return response($materialsId, Response::HTTP_OK);
    }

    /**
     * Get lists of this model
     */
    public function list()
    {
        $this->authorize('viewAny', Material::class);

        return response([
            'data' => Material::getAsList()
        ], Response::HTTP_OK);
    }
}
