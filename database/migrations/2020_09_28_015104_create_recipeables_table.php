<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recipeables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formula_id');
            $table->unsignedDecimal('portion', 6, 2);
            $table->integer('depth');
            $table->morphs('recipeable');
            $table->timestamps();
        });

        Schema::table('recipeables', function (Blueprint $table) {
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
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
        Schema::dropIfExists('recipeables');
    }
}
