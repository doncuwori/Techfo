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
        Schema::create('abdimas_information', function (Blueprint $table) {
            $table->id(); 
            $table->string('name'); 
            $table->string('lecturer_1'); 
            $table->string('lecturer_2')->nullable(); 
            $table->string('lecturer_3')->nullable(); 
            $table->string('lecturer_4')->nullable(); 
            $table->string('lecturer_5')->nullable(); 
            $table->string('description'); 
            $table->dateTime('event_time_start'); 
            $table->dateTime('event_time_end'); 
            $table->string('location'); 
            $table->integer('total_students_required'); 
            // $table->string("assignment_letter_url");
            $table->foreignId('created_by')->constrained('users')->onDelete('cascade');
            $table->timestamps(); 
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abdimas_information');
    }
};