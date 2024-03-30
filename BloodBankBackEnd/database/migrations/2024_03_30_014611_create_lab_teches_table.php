<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lab_teches', function (Blueprint $table) {
            $table->string('Cin')->primary();
            $table->timestamps();
            $table->string('Name');
            $table->string('PhoneNumber');
            $table->string('Email');
            $table->date('BirthDate');
            $table->string('Gender');
            $table->string('EncryptedPassword');
            $table->string('Role');
            $table->foreignId('blood_bank_id')->constrained();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lab_teches');
    }
};
