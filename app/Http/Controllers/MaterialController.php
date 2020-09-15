<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\Http\Requests\MaterialRequest;
use App\Http\Resources\MaterialCollection;
use App\Http\Resources\MaterialItem;
use App\Material;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MaterialController extends Controller
{
    private $modelRelations = ['user:id,name', 'matter:id,name', 'stories', 'stories.user:id,name'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Material::class);

        // Model instance
        $q = Material::with($this->modelRelations);
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

        $material = Material::create([
            'name' => $request->name,
            'matter_id' => $request->matter_id,
            'user_id' => auth()->id()
        ]);

        // add price stories
        $material->stories()->create([
            'price' => $request->price,
            'user_id' => auth()->id()
        ]);

        return response(
            new MaterialItem($material->loadMissing($this->modelRelations)),
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

        $material->update([
            'name' => $request->name,
            'matter_id' => $request->matter_id,
        ]);

        // update price stories
        $story = $material->stories();
        if ($story->first()->price != $request->price) {
            $story->create([
                'price' => $request->price,
                'user_id' => auth()->id(),
            ]);
        }

        return response(
            new MaterialItem($material->loadMissing($this->modelRelations)),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Material $material
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $materialsId = $request->ids;
        $this->authorize('delete', [Material::class, $materialsId]);

        Material::destroy($materialsId);
        return response($materialsId, Response::HTTP_OK);
    }
}
