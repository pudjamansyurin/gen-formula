<?php

namespace App\Http\Controllers;

use App\Http\Requests\MassDeleteRequest;
use App\Http\Requests\MatterRequest;
use App\Http\Resources\MatterCollection;
use App\Http\Resources\MatterItem;
use App\Matter;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MatterController extends Controller
{
    private $modelRelations = ['user:id,name', 'materials'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Matter::class);

        // Model instance
        $q = Matter::with($this->modelRelations);
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);
        // Response
        return (new MatterCollection($q->get()))
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
    public function store(MatterRequest $request)
    {
        $this->authorize('create', Matter::class);

        $matter = Matter::create([
            'name' => $request->name,
            'user_id' => auth()->id()
        ]);

        return response(
            new MatterItem($matter->loadMissing($this->modelRelations)),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function update(MatterRequest $request, Matter $matter)
    {
        $this->authorize('update', $matter);

        $matter->update([
            'name' => $request->name
        ]);

        return response(
            new MatterItem($matter->loadMissing($this->modelRelations)),
            Response::HTTP_CREATED
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function destroy(MassDeleteRequest $request)
    {
        $mattersId = $request->ids;
        $this->authorize('delete', [Matter::class, $mattersId]);

        Matter::destroy($mattersId);
        return response($mattersId, Response::HTTP_OK);
    }
}
