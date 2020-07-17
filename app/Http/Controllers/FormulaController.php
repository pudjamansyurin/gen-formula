<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\FormulaRequest;
use App\Http\Resources\FormulaCollection;
use App\Http\Resources\FormulaItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FormulaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Model instance
        $q = new Formula;
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);

        debug($q->get()[0]->percents);
        // Response
        return (new FormulaCollection($q->get()))
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
    public function store(FormulaRequest $request)
    {
        $product = Formula::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->id()
        ]);

        return response(
            new FormulaItem($product),
            Response::HTTP_CREATED
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function show(Formula $formula)
    {
        return response(
            new FormulaItem($formula),
            Response::HTTP_OK
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function update(FormulaRequest $request, Formula $formula)
    {
        $formula->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response(
            new FormulaItem($formula),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $ids = $request->ids;
        if (is_array($ids)) {
            Formula::destroy($ids);
            return response($ids, Response::HTTP_OK);
        }
        return response($ids, Response::HTTP_BAD_REQUEST);
    }
}
