<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\Http\Requests\PriceRequest;
use App\Material;
use App\Price;
use App\Http\Resources\PriceCollection;
use App\Http\Resources\PriceItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $materialId)
    {
        $this->authorize('viewAny', Price::class);

        // Model instance
        $q = Price::with(['user:id,name', 'material:id,name']);
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
        return (new PriceCollection($q->get()))
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
    public function store(PriceRequest $request, $material_id)
    {
        $this->authorize('create', Price::class);

        if (!$material = Material::find($material_id)) {
            return response([
                'message' => 'Material category not found'
            ], Response::HTTP_NOT_FOUND);
        }

        $price = Price::create([
            'material_id' => $material->id,
            'price' => $request->price,
            'changed_at' => $request->changed_at,
            'user_id' => auth()->id()
        ]);

        return response(
            new PriceItem($price->loadMissing(['user:id,name', 'material:id,name'])),
            Response::HTTP_CREATED
        );
    }

    // /**
    //  * Display the specified resource.
    //  *
    //  * @param  \App\Price  $price
    //  * @return \Illuminate\Http\Response
    //  */
    // public function show(Price $price)
    // {
    //     return response(
    //         new PriceItem($price),
    //         Response::HTTP_OK
    //     );
    // }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function update(PriceRequest $request, $material_id, Price $price)
    {
        $this->authorize('update', $price);

        $price->update([
            'material_id' => $request->material_id,
            'price' => $request->price,
            'changed_at' => $request->changed_at,
        ]);

        return response(
            new PriceItem($price->loadMissing(['user:id,name', 'material:id,name'])),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Price  $price
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $prices_id = $request->ids;
        $this->authorize('delete', [Price::class, $prices_id]);

        Price::destroy($prices_id);
        return response($prices_id, Response::HTTP_OK);
    }
}
