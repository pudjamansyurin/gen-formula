<?php

namespace App\Traits\Routines;

trait SaleRoutine
{
    /**
     * Custom methods
     */
    public function updateProduct($products)
    {
        // sync products
        $formulas = [];
        foreach ($products as $product) {
            $formulas[$product['formula_id']] = [
                'package_id' => $product['package_id'],
                'ratio' => $product['ratio']
            ];
        }
        $this->formulas()->sync($formulas);

        return $this;
    }

    public function updateRev()
    {
        $this->load(['revs']);

        // calculate total price
        $totalPrice = $this->calcRev();

        // reject if total price is same
        if ($rev = $this->revs->first()) {
            if (round($rev->price, 2) == round($totalPrice, 2)) {
                return $this;
            }
        }

        // create revs
        $this->revs()->create([
            'price' => $totalPrice,
            'user_id' => auth()->id() ?? $this->user_id
        ]);

        return $this;
    }

    public function calcRev()
    {
        $this->load(['products', 'products.formula', 'products.formula.rev', 'products.package', 'products.package.unit', 'products.package.rev']);

        $salePackage = $this->products->first()->package;
        $saleUnitSymbol = $salePackage->unit->symbol;
        $saleCapacity = $salePackage->capacity;
        $saleFilled = ($this->filled * $saleCapacity) / 100;
        $saleRatio = $this->products->reduce(function ($carry, $p) {
            return $carry + $p->ratio;
        }, 0);

        // calculate total price
        return $this->products
            ->reduce(function ($carry, $p) use ($saleUnitSymbol, $saleFilled, $saleRatio) {
                $formulaRev = $p->formula->rev;
                $packageRev = $p->package->rev;
                $productRMCS = ($saleUnitSymbol == 'KG' ? $formulaRev->price : $formulaRev->price_liter);
                $productFilled = ($p->ratio * $saleFilled) / $saleRatio;

                $productRMP = ($productRMCS * $productFilled) + $packageRev->price;

                return $carry + $productRMP;
            }, 0);
    }
}
