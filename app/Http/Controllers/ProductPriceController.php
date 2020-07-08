<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductPriceStoreRequest;
use App\Product;
use App\ProductPrice;
use App\Http\Resources\ProductPriceCollection;
use App\Http\Resources\ProductPriceItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $productId)
    {
        // Model instance
        $q = new ProductPrice;
        // Parent
        $parent = null;
        if ($productId > 0) {
            $parent = Product::find($productId);

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
        return (new ProductPriceCollection($q->get()))
            ->additional([
                'meta' => [
                    'total' => $total,
                    'parent' => $parent
                ]
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Product $product, ProductPrice $productPrice)
    {
        return response(
            new ProductPriceItem($productPrice),
            Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function show(ProductPrice $productPrice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function update(ProductPriceStoreRequest $request, ProductPrice $productPrice)
    {
        debug($productPrice);

        $productPrice->update([
            'product_id' => $request->product_id,
            'price' => $request->price,
        ]);

        return response(
            new ProductPriceItem($productPrice),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ids = $request->ids;
        if (is_array($ids)) {
            ProductPrice::destroy($ids);
            return response($ids, Response::HTTP_OK);
        }
        return response($ids, Response::HTTP_BAD_REQUEST);
    }
}
