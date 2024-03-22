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
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('QuantityDonated');
            $table->date('DonationDate');
            $table->foreignId('donor_id')->constrained();
            $table->foreignId('blood_type_id')->constrained();
            $table->foreignId('blood_camp_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('donations');
    }
};
