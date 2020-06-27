<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait RequestQueryBuilder
{
    private $search = "";
    private $options = [
        'page' => 1,
        'itemsPerPage' => 10,
        'sortBy' => 'updated_at',
        'sortDesc' => true
    ];

    public function applyRequestQuery(Request $request, $query)
    {
        // convert the request
        $this->convertRequestQuery($request);
        // apply filter
        $query = $this->applyFilter($query);
        // total records (after filtered)
        $total = $query->count();
        // apply sorter & limiter
        $query = $this->applySorter($query);
        $query = $this->applyLimiter($query);

        return [$query, $total];
    }

    private function convertRequestQuery(Request $request)
    {
        // client parameters request
        $this->search = $request->search;
        $options = json_decode($request->options);
        // append if any
        if ($options) {
            $this->options['page'] = $options->page;
            $this->options['itemsPerPage'] = $options->itemsPerPage;
            if (count($options->sortBy)) {
                $this->options['sortBy'] = $options->sortBy[0];
                $this->options['sortDesc'] = $options->sortDesc[0];
            }
        }
    }

    private function applyFilter($query)
    {
        $search = $this->search;
        $fields = $this->fields();
        $aFilter = $this->aFilter();
        // filtering
        if ($search) {
            // handle this model
            $query = $query->where(function ($query) use ($fields, $search) {
                foreach ($fields as $field) {
                    $query->orWhere($field, 'LIKE', "%{$search}%");
                }
            });
            // handle relations model
            foreach ($aFilter as $relation => $fields) {
                $query = $query->orWhereHas($relation, function ($query) use ($fields, $search) {
                    $query->where(function ($query) use ($fields, $search) {
                        foreach ($fields as $field => $alias) {
                            $query->orWhere($field, 'LIKE', "%{$search}%");
                        }
                    });
                });
            };
        }
        return $query;
    }

    private function applySorter($query)
    {
        $sortBy = $this->options['sortBy'];
        $sortDesc = $this->options['sortDesc'];
        $aSorter = $this->aSorter();
        // ordering
        if (isset($sortBy)) {
            if (array_key_exists($sortBy, $aSorter)) {
                $sortBy = $aSorter[$sortBy];
            }
            $query = $query->orderBy($sortBy, $sortDesc ? 'desc' : 'asc');
        }
        return $query;
    }

    private function applyLimiter($query)
    {
        $itemsPerPage = $this->options['itemsPerPage'];
        $page = $this->options['page'];
        // paginating
        if ($itemsPerPage > 0) {
            $query = $query->take($itemsPerPage)->skip(($page - 1) * $itemsPerPage);
        }
        return $query;
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
