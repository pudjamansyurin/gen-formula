<?php

namespace App\Http\Controllers;

use App\Http\Resources\PackageCollection;
use App\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    private $relations = ['user:id,name', 'packagers'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Package::class);

        // retrieve
        $q = Package::with($this->relations)->filtered()->sortered();

        // Response
        return (new PackageCollection($q->limited()->get()))
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
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Package $package)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(Package $package)
    {
        //
    }
}
