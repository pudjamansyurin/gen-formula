<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\FormulaRequest;
use App\Http\Requests\DeleteSomeRequest;
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
        $this->authorize('viewAny', Formula::class);

        // retrieve
        [$formulas, $total] = Formula::queried();

        // Response
        return (new FormulaCollection($formulas))
            ->additional(['total' => $total]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function show(Formula $formula)
    {
        $this->authorize('viewAny', Formula::class);

        return response(
            new FormulaItem($formula->loadRelationDetailed()),
            Response::HTTP_OK
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FormulaRequest $request)
    {
        $this->authorize('create', Formula::class);

        // create
        $formula = Formula::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return response(
            new FormulaItem($formula->loadRelation()),
            Response::HTTP_CREATED
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
        $this->authorize('update', $formula);

        // update
        $formula->update($request->validated());

        return response(
            new FormulaItem($formula->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $formulasId = $request->ids;
        $this->authorize('delete', [Formula::class, $formulasId]);

        // delete
        Formula::destroy($formulasId);

        return response($formulasId, Response::HTTP_OK);
    }
}
