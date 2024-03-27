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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Message');
            $table->date('Date');
            $table->string('Status');
            $table->string('donor_cin');
            $table->string('blood_bank_admin_cin');
            $table->foreign('donor_cin')->references('Cin')->on('donors');
            $table->foreign('blood_bank_admin_cin')->references('Cin')->on('blood_bank_admins');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
