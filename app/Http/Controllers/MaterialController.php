<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\MaterialRequest;
use App\Http\Resources\MaterialCollection;
use App\Http\Resources\MaterialItem;
use App\Material;
use App\MaterialStory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MaterialController extends Controller
{
    private $relations = ['user:id,name', 'matter:id,name', 'stories', 'stories.user:id,name'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Material::class);

        // Model instance
        $q = Material::with($this->relations);
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);

        // Response
        return (new MaterialCollection($q->get()))
            ->additional([
                'meta' => [
                    'total' => $total
                ]
            ]);
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
                $request->only(['name', 'matter_id']),
                ['user_id' => auth()->id()]
            )
        );

        // add price stories
        $material->stories()->create(
            array_merge(
                $request->only(['price']),
                ['user_id' => auth()->id()]
            )
        );

        return response(
            new MaterialItem($material->loadMissing($this->relations)),
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

            $material->update($request->only(['name', 'matter_id']));
        }

        // update price stories
        if ($material->stories()->first()->price != $request->price) {
            $this->authorize('create', MaterialStory::class);

            $material->stories()->create(
                array_merge(
                    $request->only(['price',]),
                    ['user_id' => auth()->id()]
                )
            );
        }

        return response(
            new MaterialItem($material->loadMissing($this->relations)),
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

        Material::destroy($materialsId);
        return response($materialsId, Response::HTTP_OK);
    }
}
