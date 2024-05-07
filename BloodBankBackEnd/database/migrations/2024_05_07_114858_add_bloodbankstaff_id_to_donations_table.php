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
        Schema::table('donations', function (Blueprint $table) {
            $table->string('bloodcampstaff_cin');
            $table->foreign('bloodcampstaff_cin')->references('Cin')->on('blood_camp_staff')->onDelete('cascade');        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('donations', function (Blueprint $table) {
            $table->dropForeign(['bloodcampstaff_cin']);
            $table->dropColumn('bloodcampstaff_cin');        });
    }
};
