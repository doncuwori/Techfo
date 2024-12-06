<?php

namespace App\Models\Scholarships;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScholarshipInformation extends Model
{
    use HasFactory;

    protected $table = 'scholarships_information';
    protected $fillable = [
        'name',
        'organizer',
        'event_time',
        'description',
        'poster_url',
        'created_by',
    ];
}
