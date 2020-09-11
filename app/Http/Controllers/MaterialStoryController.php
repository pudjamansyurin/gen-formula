<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\Http\Requests\MaterialStoryRequest;
use App\Material;
use App\MaterialStory;
use App\Http\Resources\MaterialStoryCollection;
use App\Http\Resources\MaterialStoryItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MaterialStoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $materialId)
    {
        $this->authorize('viewAny', MaterialStory::class);

        // Model instance
        $q = MaterialStory::with(['user:id,name', 'material:id,name']);
        // Parent
        if ($materialId > 0) {
            $q = $q->whereHas('material', function ($q) use ($materialId) {
                $q->where('id', $materialId);
            });
        }
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);
        // Response
        return (new MaterialStoryCollection($q->get()))
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
    public function store(MaterialStoryRequest $request, $materialId)
    {
        $this->authorize('create', MaterialStory::class);

        if (!$material = Material::find($materialId)) {
            return response([
                'message' => 'Material category not found'
            ], Response::HTTP_NOT_FOUND);
        }

        $price = MaterialStory::create([
            'material_id' => $material->id,
            'price' => $request->price,
            'updated_at' => $request->updated_at,
            'user_id' => auth()->id()
        ]);

        return response(
            new MaterialStoryItem($price->loadMissing(['user:id,name', 'material:id,name'])),
            Response::HTTP_CREATED
        );
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\MaterialStory  $price
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(MaterialStory $price)
    // {
    //     return response(
    //         new MaterialStoryItem($price),
    //         Response::HTTP_OK
    //     );
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\MaterialStory  $price
     * @return \Illuminate\Http\Response
     */
    public function update(MaterialStoryRequest $request, $materialId, MaterialStory $price)
    {
        $this->authorize('update', $price);

        $price->update([
            'material_id' => $request->material_id,
            'price' => $request->price,
            'updated_at' => $request->updated_at,
        ]);

        return response(
            new MaterialStoryItem($price->loadMissing(['user:id,name', 'material:id,name'])),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\MaterialStory  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $pricesId = $request->ids;
        $this->authorize('delete', [MaterialStory::class, $pricesId]);

        MaterialStory::destroy($pricesId);
        return response($pricesId, Response::HTTP_OK);
    }
}
