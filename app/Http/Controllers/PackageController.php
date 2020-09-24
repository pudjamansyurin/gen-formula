<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteSomeRequest;
use App\Http\Requests\PackageRequest;
use App\Http\Resources\PackageCollection;
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
        return (new PackageCollection($packages))
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
        $this->authorize('viewAny', Package::class);

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

        // // create packager
        // $request->packers->each(function ($packer) use ($package) {
        //     $packager = $package->packagers()->create([
        //         'packer_id' => $packer->id,
        //         'content' => $packer->content
        //     ]);

        //     // create packets
        //     $packer->packs->each(function ($pack) use ($packager) {
        //         $packager->packets()->attach($pack, [
        //             'price' => $pack->price
        //         ]);
        //     });
        // });

        // // calculate total price
        // $total = $package->packagers->reduce(function ($carry, $packager) {
        //     $price = $packager->packets->reduce(function ($carry, $packet) {
        //         return $carry + $packet->pivot->price;
        //     }, 0) / $packager->content;

        //     return $carry + $price;
        // }, 0);

        // // create revs
        // $package->revs()->create([
        //     'price' => $total
        // ]);

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

        // create packager
        foreach ($request->packers as $packer) {
            $packager = $package->packagers()->create([
                'packer_id' => $packer['id'],
                'content' => $packer['content']
            ]);

            // create packets
            foreach ($packer['packs'] as $pack) {
                $packager->packets()->attach(
                    $pack['id'],
                    ['price' => $pack['price']]
                );
            }
        }

        // // calculate total price
        // $total = $package->packagers->reduce(function ($carry, $packager) {
        //     $price = $packager->packets->reduce(function ($carry, $packet) {
        //         return $carry + $packet->pivot->price;
        //     }, 0) / $packager->content;

        //     return $carry + $price;
        // }, 0);

        // // create revs
        // $package->revs()->create([
        //     'price' => $total
        // ]);

        return response(
            new PackageItem($package->loadRelation()),
            Response::HTTP_CREATED
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

        // delete
        Package::destroy($packagesId);

        return response($packagesId, Response::HTTP_OK);
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
