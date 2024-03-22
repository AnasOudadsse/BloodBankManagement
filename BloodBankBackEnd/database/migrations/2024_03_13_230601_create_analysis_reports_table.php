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
        Schema::create('analysis_reports', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->date('DateGenerated');
            $table->string('PdfLocation');
            $table->foreignId('donation_id')->constrained()->onDelete('cascade');
            $table->foreignId('donor_id')->constrained();
            $table->foreignId('blood_bank_admin_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */

    public function down(): void
    {
        Schema::dropIfExists('analysis_reports');
    }
};
