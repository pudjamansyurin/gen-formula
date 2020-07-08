<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductItem;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Model instance
        $q = new Product;
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);
        // Response
        return (new ProductCollection($q->get()))
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
    public function store(ProductStoreRequest $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->id()
        ]);

        return response(
            new ProductItem($product),
            Response::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response(
            new ProductItem($product),
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductStoreRequest $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response(
            new ProductItem($product),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ids = $request->ids;
        if (is_array($ids)) {
            Product::destroy($ids);
            return response($ids, Response::HTTP_OK);
        }
        return response($ids, Response::HTTP_BAD_REQUEST);
    }
}
