<?php

namespace App\DataTables;

use App\User;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Yajra\DataTables\Services\DataTable;
use Carbon\Carbon;

class UserDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->eloquent($query)
            ->editColumn('last_at', function ($user){
                if ($user->last_at){
                    return with(new Carbon($user->last_at))->diffForHumans();
                }
                return $user->last_at;
            })
            ->setRowId('id');
            // ->addColumn('action', 'user.action');
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\User $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(User $model)
    {
        return $model->newQuery();
        // return $model->with('role');
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->setTableId('user-table')
                    ->columns($this->getColumns())
                    // ->addCheckbox([], true)
                    ->addAction([
                        'defaultContent' => '
                            <button class="btn btn-primary btn-sm edit">
                                Edit
                            </button>
                            <button class="btn btn-danger btn-sm delete">
                                Delete
                            </button>
                        ',
                    ])
                    ->minifiedAjax()
                    ->dom("
                        <'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>
                        <'row'<'col-sm-12'tr>>
                        <'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>
                    ")
                    ->orderBy(0)
                    ->buttons(
                        Button::raw('Create')->className('btn-success btn-sm create'),
                        // Button::make('export'),
                        Button::make('print')->className('btn-sm'),
                        // Button::make('reset'),
                        // Button::make('reload')
                    )
                    ->parameters([
                        'responsive' => [
                            'details' => [
                                'type' => 'column',
                                'target' => 'tr'
                            ]
                        ],
                        // 'select' => true,
                        'autoWidth' => false,
                    ]);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            // Column::computed('action')
            //       ->exportable(false)
            //       ->printable(false)
            //       ->width(60)
            //       ->addClass('text-center'),
            // Column::checkbox('check'),
            Column::make('id'),
            Column::make('name'),
            Column::make('email'),
            Column::make('role.name')->title('Role'),
            Column::make('last_at')->title('LastAt'),
            Column::make('last_ip')->title('LastIp'),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'User_' . date('YmdHis');
    }
}
