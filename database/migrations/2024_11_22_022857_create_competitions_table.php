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

        Schema::create('competitions', function (Blueprint $table) {
            $table->id(); // ID kompetisi
            $table->boolean('is_group')->default(false); // Kompetisi kelompok
            $table->string('leader_nim', 20)->nullable(); // NIM ketua kelompok
            $table->string('ormawa_delegation')->nullable(); // Delegasi ORMAWA
            $table->string('mentor_name')->nullable(); // Nama pembimbing
            $table->string('activity_name'); // Nama kegiatan
            $table->string('field')->nullable(); // Bidang lomba
            $table->string('organizer')->nullable(); // Penyelenggara
            $table->string('host_country')->nullable(); // Negara penyelenggara
            $table->string('location')->nullable(); // Lokasi kegiatan
            $table->date('activity_date_start')->nullable(); // Tanggal mulai
            $table->date('activity_date_end')->nullable(); // Tanggal selesai
            $table->text('description')->nullable(); // Deskripsi kegiatan
            $table->string('poster_url')->nullable(); // URL poster
            $table->timestamps();
        });
        
        Schema::create('competition_user', function (Blueprint $table) {
            $table->id(); // ID relasi
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade'); // Foreign key ke users
            $table->foreignId('competition_id')->constrained('competitions')->onDelete('cascade'); // Foreign key ke competitions
            $table->timestamps();
        });
        
   

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competition_user');
        Schema::dropIfExists('competitions');
        

    }
};
