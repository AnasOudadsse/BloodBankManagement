<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('donors', function (Blueprint $table) {
            $table->string('Cin')->primary();
            $table->timestamps();
            $table->string('Name');
            $table->string('PhoneNumber');
            $table->string('Email');
            $table->date('BirthDate');
            $table->string('Gender');
            $table->string('EncryptedPassword');
            $table->string('Role');
            $table->string('City');
            $table->string('Address');
            $table->string('Image');
            $table->foreignId('blood_id')->constrained('blood_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donors');
    }
};
