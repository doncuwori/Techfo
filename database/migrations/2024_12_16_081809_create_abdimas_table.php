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
        Schema::create('abdimas_registrants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('telephone');
            $table->string('organizer');
            $table->string('khs');
            $table->string('cv');
            $table->string('portofolio');
            $table->string('foto');
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
        });

        Schema::create('user_abdimas_registrants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('abdimas_registrant_id')->constrained('abdimas_registrants')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('abdimas_recipients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('telephone');
            $table->string('organizer');
            $table->string('khs');
            $table->string('cv');
            $table->string('portofolio');
            $table->string('foto');
            $table->foreignId('created_by')->constrained('users');
            $table->timestamps();
        });

        Schema::create('user_abdimas_recipients', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('abdimas_recipient_id')->constrained('abdimas_recipients')->onDelete('cascade');
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
