<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('indirizzi', function (Blueprint $table) {
            $table->id();
            $table->foreignId('persona_id')
                  ->constrained('persone')
                  ->onDelete('cascade');
            $table->string('via')->nullable();
            $table->string('cap', 10)->nullable();
            $table->string('citta')->nullable();
            $table->string('provincia', 5)->nullable();
            $table->string('stato')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('indirizzi');
    }
};
