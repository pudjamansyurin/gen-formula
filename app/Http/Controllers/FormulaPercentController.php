<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\FormulaPercentRequest;
use App\Http\Resources\FormulaPercentCollection;
use App\Http\Resources\FormulaPercentItem;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class FormulaPercentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FormulaPercentRequest $request, Formula $formula)
    {
        $formulaPercents = $request->formula;

        if ($formula) {
            // check total
            if (array_sum(array_column($formulaPercents, 'percent')) == 100) {
                array_map(function ($el) {
                }, $formulaPercents);

                // $formula->percents()->sync($formulaPercents)

                //     $productPrice = ProductPrice::create([
                //         'formula_id' => $formula->id,
                //         'product_id' => $request->product_id,
                //         'percent' => $request->percent,
                //         'user_id' => auth()->id()
                //     ]);

                // return response(
                //     new FormulaPercentCollection($formulaPercents),
                //     Response::HTTP_CREATED
                // );
            }

            throw ValidationException::withMessages([
                'total_percentage' => 'The total percentage should be 100%',
            ]);
        }

        return response([
            'message' => 'Formula category not found'
        ], Response::HTTP_NOT_FOUND);
    }
}
