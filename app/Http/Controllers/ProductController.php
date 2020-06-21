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
        // default parameters
        $page = 1;
        $itemsPerPage = 10;
        $sortBy = "updated_at";
        $sortDesc = true;

        // client side parameters request
        $options = json_decode($request->input('options'));
        $search = $request->input('search');
        debug($options);
        debug($search);

        if ($options) {
            $page = $options->page;
            $itemsPerPage = $options->itemsPerPage;
            if (count($options->sortBy)) {
                $sortBy = $options->sortBy[0];
                $sortDesc = $options->sortDesc[0];
            }
        }

        // Make product instance
        $q = new Product();
        $total = $q->count();

        // filtering
        if ($search) {
            $fields = ['name', 'description'];
            $relations = ['user' => ['name']];

            // handle this model
            $q = $q->where(function ($q) use ($fields, $search) {
                foreach ($fields as $field) {
                    $q->orWhere($field, 'LIKE', "%{$search}%");
                }
            });
            // handle model relations
            foreach ($relations as $relation => $fields) {
                $q = $q->orWhereHas($relation, function ($q) use ($fields, $search) {
                    $q->where(function ($q) use ($fields, $search) {
                        foreach ($fields as $field) {
                            $q->orWhere($field, 'LIKE', "%{$search}%");
                        }
                    });
                });
            };
            // update total records
            $total = $q->count();
        }
        // paginating
        if ($itemsPerPage > 0) {
            $q = $q->take($itemsPerPage)->skip(($page - 1) * $itemsPerPage);
        }
        // ordering
        if (isset($sortBy)) {
            $q = $q->orderBy($sortBy, $sortDesc ? 'desc' : 'asc');
        }

        return (new ProductCollection($q->get()))->additional([
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
        $product = Product::create(
            array_merge(
                $request->all(),
                ['user_id' => auth()->id()]
            )
        );

        return response(
            new ProductItem($product->load('user')),
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
        $product->update($request->all());

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
    public function destroy(Request $request, Product $product)
    {
        $ids = $request->input('ids');
        if (is_array($ids)) {
            Product::destroy($ids);
        }

        return response($ids, Response::HTTP_OK);
    }
}
