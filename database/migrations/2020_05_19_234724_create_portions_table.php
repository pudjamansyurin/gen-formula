<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePortionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('formula_id');
            $table->foreignId('material_id');
            $table->integer('portion');
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::table('portions', function (Blueprint $table) {
            $table->foreign('formula_id')
                ->references('id')
                ->on('formulas')
                ->onDelete('cascade');
            $table->foreign('material_id')
                ->references('id')
                ->on('materials')
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
        Schema::dropIfExists('portions');
    }
}
