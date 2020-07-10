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
        if ($formula) {
            $formulaPercents = collect($request->formula)
                ->map(function ($el) use ($formula) {
                    return [
                        'formula_id' => $formula->id,
                        'product_id' => $el['product_id'],
                        'percent' => $el['percent'],
                        'user_id' => auth()->id()
                    ];
                });

            // check total
            if ($formulaPercents->sum('percent') == 100) {
                $formula->percents()->delete();
                $formula->percents()->insert($formulaPercents->toArray());
                $formula->refresh();

                return response(
                    new FormulaPercentCollection($formula->percents),
                    Response::HTTP_CREATED
                );
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
