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

        // retrieve
        $q = Packer::with($this->relations)->filtered()->sortered();

        // Response
        return (new PackerCollection($q->limited()->get()))
            ->additional([
                'total' => $q->count()
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
