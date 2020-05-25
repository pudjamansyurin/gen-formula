@extends('layouts.app')

@section('title', 'Products')

@section('content')
<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
    <h1 class="h2">Products</h1>
    <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
        </div>
        <button type="button" class="btn btn-sm btn-success">
            <span data-feather="calendar"></span>
            Create
        </button>
    </div>
</div>

<div class="table-responsive">
    <formula-table :products='@json($products->toArray()["data"])'>
    </formula-table>

    <div class="d-flex justify-content-center">
        {{ $products->onEachSide(1)->links() }}
    </div>
</div>
@endsection
