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
        Schema::create('scholarship_registrants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('organizer');
            $table->string('host_country');
            $table->date('event_date');
            $table->text('description');
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
        });

        Schema::create('user_scholarship_registrants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('scholarship_registrant_id')->constrained('scholarship_registrants')->onDelete('cascade');
            $table->timestamps();
        });
        

        Schema::create('scholarship_recipients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->string('organizer');
            $table->string('host_country');
            $table->date('event_date');
            $table->text('description');
            $table->text('proof_scan_url')->nullable();
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
        });
        Schema::create('user_scholarship_recipients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('scholarship_recipient_id')->constrained('scholarship_recipients')->onDelete('cascade');
            $table->timestamps();
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
