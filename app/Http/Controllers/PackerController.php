<?php

namespace App\Http\Controllers;

use App\Http\Resources\PackerCollection;
use App\Packer;
use Illuminate\Http\Request;

class PackerController extends Controller
{
    private $relations = ['user:id,name', 'packs'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Packer::class);

        // Model instance
        $q = Packer::with($this->relations);
        // Client Query
        $q = $q->clientFilter($request);
        $total = $q->count();
        $q = $q->clientSorter($request);
        $q = $q->clientLimiter($request);

        // Response
        return (new PackerCollection($q->get()))
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Packer  $packer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Packer $packer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Packer  $packer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Packer $packer)
    {
        //
    }
}
