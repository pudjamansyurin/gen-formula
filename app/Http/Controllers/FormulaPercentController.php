<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\FormulaPercentRequest;
use App\Http\Resources\FormulaItem;
use App\Http\Resources\FormulaPercentCollection;
use App\Http\Resources\FormulaPercentItem;
use Carbon\Carbon;
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
            $formulaNew = collect($request->formula)
                ->map(function ($el) use ($formula) {
                    return [
                        'formula_id' => $formula->id,
                        'product_id' => $el['product_id'],
                        'percent' => $el['percent'],
                        'user_id' => auth()->id(),
                    ];
                });

            // check total
            if ($formulaNew->sum('percent') == 100) {
                // check existing
                $same = [];
                $changed = [];
                $formulaNew->each(function ($el, $key) use ($formula, &$same, &$changed) {
                    $old = $formula->percents->firstWhere('product_id', $el['product_id']);
                    if ($old) {
                        // check is percent same
                        if ($old->percent == $el['percent']) {
                            array_push($same, $old->product_id);
                        } else {
                            array_push($changed, $old->product_id);
                        }
                    }
                });
                // delete removed
                $formula->percents()
                    ->whereNotIn('product_id', array_merge($same, $changed))
                    ->delete();
                // update existing
                $formulaNew->whereIn('product_id', $changed)
                    ->each(function ($el) use ($formula) {
                        $formula->percents()
                            ->where('product_id', $el['product_id'])
                            ->update($el);
                    });
                // create new
                $formulaNew->whereNotIn('product_id', array_merge($same, $changed))
                    ->each(function ($el) use ($formula) {
                        $formula->percents()->create($el);
                    });

                return response(
                    new FormulaItem($formula->refresh()),
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
