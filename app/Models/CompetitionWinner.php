<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionWinner extends Model
{
    use HasFactory;
    protected $fillable = [
        'is_group',
        'leader_nim',
        'scope',
        'degree',
        'ormawa_delegation',
        'mentor_name',
        'activity_name',
        'field',
        'organizer',
        'host_country',
        'location',
        'activity_date_start',
        'activity_date_end',
        'description',
        'achievement_level',
        'proof_scan_url',
        'event_photo_url',
    ];
}