<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePcuHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pcu_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pcu_id');
            $table->double('total_price');
            $table->timestamps();
        });


        Schema::table('pcu_histories', function (Blueprint $table) {
            $table->foreign('pcu_id')
                ->references('id')
                ->on('pcus')
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
        Schema::dropIfExists('pcu_histories');
    }
}
