<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\PackageRequest;
use App\Http\Resources\PackageItem;
use App\Package;
use App\Unit;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Package::class);

        // retrieve
        [$packages, $total] = Package::queried();

        // Response
        return (PackageItem::collection($packages))
            ->additional(['total' => $total]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function show(Package $package)
    {
        $this->authorize('view', $package);

        return response(
            new PackageItem($package->loadRelationDetailed()),
            Response::HTTP_OK
        );
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
        $package = Package::create(array_merge(
            $request->validated(),
            ['user_id' => auth()->id()]
        ));

        return response(
            new PackageItem($package->loadRelation()),
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

        // update
        $package->update($request->validated());

        return response(
            new PackageItem($package->loadRelation()),
            Response::HTTP_OK
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Package  $package
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteSomeRequest $request)
    {
        $packagesId = $request->ids;
        $this->authorize('delete', [Package::class, $packagesId]);

        // check
        if ($response = Package::rejectWhenHas($packagesId, ['sales'])) {
            return $response;
        }

        // delete
        Package::destroy($packagesId);

        return response($packagesId, Response::HTTP_OK);
    }

    /**
     * Get lists of this model
     */
    public function list()
    {
        $this->authorize('viewAny', Package::class);

        return response([
            'data' => Package::getAsProductList()
        ], Response::HTTP_OK);
    }

    /**
     * Get units
     */
    public function units()
    {
        $this->authorize('unit', Package::class);

        return response([
            'data' => Unit::all()
        ], Response::HTTP_OK);
    }
}
