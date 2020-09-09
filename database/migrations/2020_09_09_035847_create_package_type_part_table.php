<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageTypePartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_type_part', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_type_id');
            $table->foreignId('package_type_part_id');
            $table->double('price');
            $table->timestamps();
        });

        Schema::table('package_type_part', function (Blueprint $table) {
            $table->foreign('package_type_id')
                ->references('id')
                ->on('package_types')
                ->onDelete('cascade');
            $table->foreign('package_type_part_id')
                ->references('id')
                ->on('package_type_parts')
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
        Schema::dropIfExists('package_type_part');
    }
}
