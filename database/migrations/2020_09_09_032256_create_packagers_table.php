<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packagers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_id');
            $table->foreignId('packer_id');
            $table->integer('content');
            $table->timestamps();
        });

        Schema::table('packagers', function (Blueprint $table) {
            $table->foreign('package_id')
                ->references('id')
                ->on('packages')
                ->onDelete('cascade');
            $table->foreign('packer_id')
                ->references('id')
                ->on('packers')
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
        Schema::dropIfExists('packagers');
    }
}
