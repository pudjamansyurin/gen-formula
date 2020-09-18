<?php

namespace App\Http\Controllers;

use App\Http\Requests\PackageRequest;
use App\Http\Resources\PackageCollection;
use App\Http\Resources\PackageItem;
use App\Package;
use App\Unit;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackageController extends Controller
{
    private $relations = ['user:id,name', 'unit', 'packagers', 'stories'];
    private $counts = ['packagers', 'stories'];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Package::class);

        // retrieve
        $q = Package::with($this->relations)
            ->withCount($this->counts)
            ->filtered()
            ->sortered();
        $total = $q->count();

        // Response
        return (new PackageCollection($q->limited()->get()))
            ->additional([
                'total' => $total
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PackageRequest $request)
    {
        $this->authorize('create', Package::class);

        // create
        $package = Package::create(
            array_merge(
                $request->validated(),
                ['user_id' => auth()->id()]
            )
        );

        return response(
            new PackageItem(
                $package->loadMissing($this->relations)
                    ->loadCount($this->counts)
            ),
            Response::HTTP_CREATED
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function update(PackageRequest $request, Package $package)
    {
        $this->authorize('update', $package);

        // create
        $package->update($request->validated());

        return response(
            new PackageItem(
                $package->loadMissing($this->relations)
                    ->loadCount($this->counts)
            ),
            Response::HTTP_CREATED
        );
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

    /**
     * Get units
     */
    public function unit()
    {
        $this->authorize('unit', Package::class);

        return response([
            'data' => Unit::all()
        ], Response::HTTP_OK);
    }
}
