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
        'poster_url',
        'created_by',
    ];
}
