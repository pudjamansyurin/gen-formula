<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMaterialRevsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('material_revs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('material_id');
            $table->unsignedDecimal('price', 15, 2);
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::table('material_revs', function (Blueprint $table) {
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
        Schema::dropIfExists('material_revs');
    }
}
