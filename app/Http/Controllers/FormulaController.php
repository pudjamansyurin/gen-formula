<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\FormulaRequest;
use App\Http\Requests\MassDeleteRequest;
use App\Http\Resources\FormulaCollection;
use App\Http\Resources\FormulaItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FormulaController extends Controller
{
    private $modelRelations = ['user:id,name', 'portions.material.stories'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Formula::class);

        // Model instance
        $q = Formula::with($this->modelRelations);
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);

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
        $this->authorize('create', Formula::class);

        $formula = Formula::create([
            'name' => $request->name,
            'description' => $request->description,
            'user_id' => auth()->id()
        ]);

        return response(
            new FormulaItem($formula->loadMissing($this->modelRelations)),
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

        $formula->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response(
            new FormulaItem($formula->loadMissing($this->modelRelations)),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $formulasId = $request->ids;
        $this->authorize('delete', [Formula::class, $formulasId]);

        Formula::destroy($formulasId);
        return response($formulasId, Response::HTTP_OK);
    }
}
