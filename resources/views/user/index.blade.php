@extends('layouts.dashboard')

@section('title', 'Users')

@section('content')
<user :roles="{{ $roles }}" :data="user">
    {{ $dataTable->table(['class' => 'table table-hover table-sm']) }}
</user>
@endsection

@push('scripts')
<script src="{{ asset('vendor/datatables/buttons.server-side.js') }}"></script>
{{ $dataTable->scripts() }}
<script>
    $(function() {
        $(".dataTables_wrapper").on("click", ".create", function() {
            app.userModal('create', null);
        });

        $(".dataTables_wrapper").on("click", ".edit", function() {
            app.userModal('edit', $(this)
                .closest("tr")
                .attr("id"));
        });

        $(".dataTables_wrapper").on("click", ".delete", function() {
            app.userModal('delete', $(this)
                .closest("tr")
                .attr("id"));
        });
    });
</script>
@endpush
