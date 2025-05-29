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
        Schema::create('blood_analysis', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->boolean('IsGood');
            $table->string('AnalysisReport');
            $table->string('lab_tech_cin');
            $table->foreignId('donation_id')->constrained();
            $table->foreign('lab_tech_cin')->references('Cin')->on('lab_teches');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   
        Schema::dropIfExists('blood_analysis');
    }
};
