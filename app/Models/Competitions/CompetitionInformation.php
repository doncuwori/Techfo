<?php

namespace App\Models\Competitions;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionInformation extends Model
{
    use HasFactory;
    protected $table = 'competitions_information';
    protected $fillable = [
        'name',
        'organizer',
        'event_time_start',
        'event_time_end',
        'description',
        'activity_link', 
        'guidebook_link', 
        'poster_url',
        'created_by',
    ];
}
