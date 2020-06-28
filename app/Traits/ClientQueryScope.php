<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait ClientQueryScope
{
    /**
     * Local scopes
     */
    public function scopeClientFilter($q, $request)
    {
        // filtering
        $search = $request->input('search', '');
        if ($search) {
            $fields = $this->fields();
            // handle this model
            $q = $q->where(function ($q) use ($fields, $search) {
                foreach ($fields as $field) {
                    $q->orWhere($field, 'LIKE', "%{$search}%");
                }
            });
            // handle relations model
            $aFilter = $this->aFilter();
            foreach ($aFilter as $relation => $fields) {
                $q = $q->orWhereHas($relation, function ($q) use ($fields, $search) {
                    $q->where(function ($q) use ($fields, $search) {
                        foreach ($fields as $field => $alias) {
                            $q->orWhere($field, 'LIKE', "%{$search}%");
                        }
                    });
                });
            };
        }

        return $q;
    }

    public function scopeClientSorter($q, $request)
    {
        // get parameters
        $sortBy = $request->input('sortBy.0', 'updated_at');
        $sortDesc = $request->boolean('sortDesc.0', true);
        // sorting
        $aSorter = $this->aSorter();
        if (array_key_exists($sortBy, $aSorter)) {
            $sortBy = $aSorter[$sortBy];
        }
        $q = $q->orderBy($sortBy, $sortDesc ? 'desc' : 'asc');

        return $q;
    }

    public function scopeClientLimiter($q, $request)
    {
        // get parameters
        $page = $request->input('page', 1);
        $itemsPerPage = $request->input('itemsPerPage', 10);
        // limiting
        if ($itemsPerPage > 0) {
            $q = $q->take($itemsPerPage)->skip(($page - 1) * $itemsPerPage);
        }

        return $q;
    }

    private function fields()
    {
        if (property_exists($this, 'fillable')) {
            return array_filter($this->fillable, function ($item) {
                return strpos($item, "_id") === false;
            });
        }
        return [];
    }

    private function aFilter()
    {
        if (property_exists($this, 'aQuery')) {
            if (array_key_exists('fitler', $this->aQuery)) {
                return $this->aQuery['filter'];
            }
        }
        return [];
    }

    private function aSorter()
    {
        if (property_exists($this, 'aQuery')) {
            if (array_key_exists('sorter', $this->aQuery)) {
                return $this->aQuery['sorter'];
            }
        }
        return [];
    }
}