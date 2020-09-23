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
     * Get lists of this model
     */
    public function list()
    {
        $this->authorize('viewAny', Material::class);

        return response([
            'data' => Material::getAsList()
        ], Response::HTTP_OK);
    }

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
            new MaterialItem($material->loadRelation()),
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

        $material = Material::create(
            array_merge(
                $request->validated(),
                ['user_id' => auth()->id()]
            )
        );

        // add price revs
        $material->revs()->create([
            'price' => $request->revs_price,
            'user_id' => auth()->id()
        ]);

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
        $fields = ['name', 'matter_id'];

        if (array_diff(
            $material->only($fields),
            $request->only($fields)
        )) {
            $this->authorize('update', $material);

            $material->update($request->validated());
        }

        // update price revs
        if ($material->revs()->first()->price != $request->revs_price) {
            $this->authorize('create', MaterialRev::class);

            $material->revs()->create([
                'price' => $request->revs_price,
                'user_id' => auth()->id()
            ]);
        }

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
}
