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
        Schema::create('scholarships_information', function (Blueprint $table) {
            $table->id(); 
            $table->string('name'); 
            $table->string('organizer'); 
            $table->dateTime('event_time'); 
            $table->text('description'); 
            $table->string('poster_url'); 
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
