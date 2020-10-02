<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\SaleRequest;
use App\Http\Resources\SaleCollection;
use App\Http\Resources\SaleItem;
use App\Sale;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Sale::class);

        // retrieve
        [$sales, $total] = Sale::queried();

        // Response
        return (new SaleCollection($sales))
            ->additional(['total' => $total]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        $this->authorize('view', $sale);

        return response(
            new SaleItem($sale->loadRelationDetailed()),
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SaleRequest $request)
    {
        // $this->authorize('create', Sale::class);

        // // create
        // $sale = Sale::create(array_merge(
        //     $request->validated(),
        //     ['user_id' => auth()->id()]
        // ));

        // return response(
        //     new SaleItem($sale->loadRelation()),
        //     Response::HTTP_CREATED
        // );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(SaleRequest $request, Sale $sale)
    {
        // $this->authorize('update', $sale);

        // // update
        // $sale->update($request->validated());

        // return response(
        //     new SaleItem($sale->loadRelation()),
        //     Response::HTTP_OK
        // );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Sale $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        // $salesId = $request->ids;
        // $this->authorize('delete', [Sale::class, $salesId]);

        // // check
        // if (Sale::has('formulas')->whereIn('id', $salesId)->count()) {
        //     // failed
        //     return response([
        //         'message' => "Still have 'FORMULA' relations!"
        //     ], Response::HTTP_UNPROCESSABLE_ENTITY);
        // }

        // // delete
        // Sale::destroy($salesId);
        // return response($salesId, Response::HTTP_OK);
    }
}
