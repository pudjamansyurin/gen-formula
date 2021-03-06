<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\MaterialRequest;
use App\Http\Resources\MaterialItem;
use App\Material;
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
        return (MaterialItem::collection($materials))
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
        $this->authorize('view', $material);

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

        // update
        $material->update($request->validated());

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

        // check
        if ($response = Material::rejectWhenHas($materialsId, ['formulas'])) {
            return $response;
        }

        // delete
        Material::destroy($materialsId);
        return response($materialsId, Response::HTTP_OK);
    }
}
