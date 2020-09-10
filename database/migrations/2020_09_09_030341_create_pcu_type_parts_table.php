<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePcuTypePartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pcu_type_parts', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->foreignId('pcu_type_id');
            $table->timestamps();
        });

        Schema::table('pcu_type_parts', function (Blueprint $table) {
            $table->foreign('pcu_type_id')
                ->references('id')
                ->on('pcu_types')
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
        Schema::dropIfExists('pcu_type_parts');
    }
}
