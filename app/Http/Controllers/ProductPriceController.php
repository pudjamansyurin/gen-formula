<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductPrice;
use Illuminate\Http\Request;
use App\Http\Resources\ProductPriceCollection;

class ProductPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Product $product)
    {
        // Model instance
        $q = new ProductPrice;
        // Parent Query
        $q = $q->whereHas('product', function ($q) use ($product) {
            $q->where('id', $product->id);
        });
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);
        // Response
        return (new ProductPriceCollection($q->get()))
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
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, ProductPrice $productPrice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductPrice  $productPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductPrice $productPrice)
    {
        //
    }
}
