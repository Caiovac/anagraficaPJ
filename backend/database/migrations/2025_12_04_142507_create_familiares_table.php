<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('familiari', function (Blueprint $table) {
            $table->id();
            $table->foreignId('persona_id')
                  ->constrained('persone')
                  ->onDelete('cascade');
            $table->string('nome');
            $table->string('cognome')->nullable();
            $table->string('relazione')->nullable();  // padre, madre, figlio, ecc.
            $table->date('data_nascita')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('familiari');
    }
};
