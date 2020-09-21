<?php

namespace App\Http\Controllers;

use App\Formula;
use App\Http\Requests\PortionRequest;
use App\Http\Resources\FormulaItem;
use App\Http\Resources\PortionCollection;
use App\Http\Resources\PortionItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class PortionController extends Controller
{
    private $relations = ['user:id,name', 'portions.material.revs'];

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PortionRequest $request, Formula $formula)
    {
        $this->authorize('update', $formula);

        $formula = $formula->loadMissing($this->relations);

        $formulaNew = collect($request->formula)
            ->map(function ($el) use ($formula) {
                return [
                    'formula_id' => $formula->id,
                    'material_id' => $el['material_id'],
                    'portion' => $el['portion'],
                    'user_id' => auth()->id(),
                ];
            });

        // check total
        if ($formulaNew->sum('portion') == 100) {
            // check existing
            $same = [];
            $changed = [];
            $formulaNew->each(function ($el) use ($formula, &$same, &$changed) {
                $old = $formula->portions->firstWhere('material_id', $el['material_id']);
                if ($old) {
                    // check is portion same
                    if ($old->portion == $el['portion']) {
                        array_push($same, $old->material_id);
                    } else {
                        array_push($changed, $old->material_id);
                    }
                }
            });
            // delete removed
            $formula->portions()
                ->whereNotIn('material_id', array_merge($same, $changed))
                ->delete();
            // update existing
            $formulaNew->whereIn('material_id', $changed)
                ->each(function ($el) use ($formula) {
                    $formula->portions()
                        ->where('material_id', $el['material_id'])
                        ->update($el);
                });
            // create new
            $formulaNew->whereNotIn('material_id', array_merge($same, $changed))
                ->each(function ($el) use ($formula) {
                    $formula->portions()->create($el);
                });

            return response(
                new FormulaItem($formula->refresh()),
                Response::HTTP_CREATED
            );
        }

        throw ValidationException::withMessages([
            'portion_total' => 'The total portion should be 100%',
        ]);
    }
}
