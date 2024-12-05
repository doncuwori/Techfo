<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionAchievement extends Model
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
        'scan_evidence_url',
        'photo_activity_url',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'competition_achievement_user');
    }
}
