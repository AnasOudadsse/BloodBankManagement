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
        Schema::create('blood_bank_admins', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Name');
            $table->string('PhoneNumber');
            $table->string('Email');
            $table->date('BirthDate');
            $table->string('Gender');
            $table->string('EncryptedPassword');
            $table->string('Role');
            $table->foreignId('blood_bank_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blood_bank_admins');
    }
};
