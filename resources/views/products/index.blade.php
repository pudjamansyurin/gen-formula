@extends('layouts.app')

@section('title', 'Products')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Products</div>

                <div class="card-body">
                    @if($products->isEmpty())
                    Opps, no products yet.
                    @else
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Creator</td>
                                <td>Created At</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($products as $product)
                            <tr>
                                <td>{{ $product->id }}</td>
                                <td>{{ $product->name }}</td>
                                <td>{{ $product->user->name }}</td>
                                <td>{{ $product->created_at }}</td>
                                <td>
                                    <a class="btn btn-small btn-success"
                                        href="{{ URL::to('product/' . $product->id) }}">Show</a>

                                    <a class="btn btn-small btn-info"
                                        href="{{ URL::to('product/' . $product->id . '/edit') }}">Edit</a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
