<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePcusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pcus', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->foreignId('unit_id');
            $table->float('capacity');
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::table('pcus', function (Blueprint $table) {
            $table->foreign('unit_id')
                ->references('id')
                ->on('pcu_units')
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
        Schema::dropIfExists('pcu');
    }
}
