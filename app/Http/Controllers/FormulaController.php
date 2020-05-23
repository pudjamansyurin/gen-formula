<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Formula;

class FormulaController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Formula::class, 'formula');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'Formula Index';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * Display the specified resource.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function show(Formula $formula)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function edit(Formula $formula)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Formula $formula)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Formula  $formula
     * @return \Illuminate\Http\Response
     */
    public function destroy(Formula $formula)
    {
        //
    }
}
