<?php

namespace App\Observers;

use App\Sale;

class SaleObserver
{
    /**
     * Handle the sale "saved" event.
     *
     * @param  \App\Sale  $sale
     * @return void
     */
    public function saved(Sale $sale)
    {
        // update products
        if ($products = request('_products')) {
            $sale->updateProduct($products);
        }
        // update total price
        $sale->updateRev();
    }
}
