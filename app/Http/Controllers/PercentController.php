<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\PercentRequest;
use App\Http\Resources\FormulaItem;
use App\Http\Resources\PercentCollection;
use App\Http\Resources\PercentItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class PercentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PercentRequest $request, Formula $formula)
    {
        $this->authorize('update', $formula);

        $formula = $formula->loadMissing(['user:id,name', 'percents.material.prices']);

        $formulaNew = collect($request->formula)
            ->map(function ($el) use ($formula) {
                return [
                    'formula_id' => $formula->id,
                    'material_id' => $el['material_id'],
                    'percent' => $el['percent'],
                    'user_id' => auth()->id(),
                ];
            });

        // check total
        if ($formulaNew->sum('percent') == 100) {
            // check existing
            $same = [];
            $changed = [];
            $formulaNew->each(function ($el) use ($formula, &$same, &$changed) {
                $old = $formula->percents->firstWhere('material_id', $el['material_id']);
                if ($old) {
                    // check is percent same
                    if ($old->percent == $el['percent']) {
                        array_push($same, $old->material_id);
                    } else {
                        array_push($changed, $old->material_id);
                    }
                }
            });
            // delete removed
            $formula->percents()
                ->whereNotIn('material_id', array_merge($same, $changed))
                ->delete();
            // update existing
            $formulaNew->whereIn('material_id', $changed)
                ->each(function ($el) use ($formula) {
                    $formula->percents()
                        ->where('material_id', $el['material_id'])
                        ->update($el);
                });
            // create new
            $formulaNew->whereNotIn('material_id', array_merge($same, $changed))
                ->each(function ($el) use ($formula) {
                    $formula->percents()->create($el);
                });

            return response(
                new FormulaItem($formula->refresh()),
                Response::HTTP_CREATED
            );
        }

        throw ValidationException::withMessages([
            'percent_total' => 'The total percentage should be 100%',
        ]);
    }
}
