<?php

namespace App\Models\Competitions;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompetitionRegistrant extends Model
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
        'poster_url',
    ];
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_competition_registrants');
    }
}
