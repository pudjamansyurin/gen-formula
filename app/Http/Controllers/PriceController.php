<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\Http\Requests\PriceRequest;
use App\Product;
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
    public function index(Request $request, $productId)
    {
        $this->authorize('viewAny', Price::class);

        // Model instance
        $q = new Price;
        // Parent
        if ($productId > 0) {
            $q = $q->whereHas('product', function ($q) use ($productId) {
                $q->where('id', $productId);
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
    public function store(PriceRequest $request, $product_id)
    {
        $this->authorize('create', Price::class);

        if (!$product = Product::find($product_id)) {
            return response([
                'message' => 'Product category not found'
            ], Response::HTTP_NOT_FOUND);
        }

        $price = Price::create([
            'product_id' => $product->id,
            'price' => $request->price,
            'changed_at' => $request->changed_at,
            'user_id' => auth()->id()
        ]);

        return response(
            new PriceItem($price),
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
    public function update(PriceRequest $request, $product_id, Price $price)
    {
        $this->authorize('update', $price);

        $price->update([
            'product_id' => $request->product_id,
            'price' => $request->price,
            'changed_at' => $request->changed_at,
        ]);

        return response(
            new PriceItem($price->refresh()),
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
