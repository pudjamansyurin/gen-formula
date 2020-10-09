<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sale_id');
            $table->foreignId('formula_id');
            $table->foreignId('package_id');
            $table->integer('ratio');
            $table->timestamps();
        });

        Schema::table('products', function (Blueprint $table) {
            $table->foreign('sale_id')
                ->references('id')
                ->on('sales')
                ->onDelete('cascade');
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
                ->onDelete('cascade');
            $table->foreign('package_id')
                ->references('id')
                ->on('packages')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
