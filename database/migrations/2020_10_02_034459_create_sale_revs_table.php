<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSaleRevsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sale_revs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sale_id');
            $table->unsignedDecimal('price', 15, 2);
            $table->unsignedDecimal('filled', 5, 2);
            $table->foreignId('user_id');
            $table->timestamps();
        });

        Schema::table('sale_revs', function (Blueprint $table) {
            $table->foreign('sale_id')
                ->references('id')
                ->on('sales')
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
        Schema::dropIfExists('sale_revs');
    }
}
