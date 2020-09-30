<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulaRevsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('formula_revs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formula_id');
            $table->unsignedDecimal('price_kilogram', 15, 2);
            $table->unsignedDecimal('price_liter', 15, 2);
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::table('formula_revs', function (Blueprint $table) {
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
                ->onDelete('cascade');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('formula_revs');
    }
}
