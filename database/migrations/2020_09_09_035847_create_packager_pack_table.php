<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagerPackTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packager_pack', function (Blueprint $table) {
            $table->id();
            $table->foreignId('packager_id');
            $table->foreignId('pack_id');
            $table->double('price');
            $table->timestamps();
        });

        Schema::table('packager_pack', function (Blueprint $table) {
            $table->foreign('packager_id')
                ->references('id')
                ->on('packagers')
                ->onDelete('cascade');
            $table->foreign('pack_id')
                ->references('id')
                ->on('packs')
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
        Schema::dropIfExists('packager_pack');
    }
}
