<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePcuPartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pcu_part', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pcu_id');
            $table->foreignId('pcu_type_part_id');
            $table->double('price');
            $table->timestamps();
        });

        Schema::table('pcu_part', function (Blueprint $table) {
            $table->foreign('pcu_id')
                ->references('id')
                ->on('pcus')
                ->onDelete('cascade');
            $table->foreign('pcu_type_part_id')
                ->references('id')
                ->on('pcu_type_parts')
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
        Schema::dropIfExists('pcu_part');
    }
}
