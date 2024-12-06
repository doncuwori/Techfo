<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionWinner;
use App\Models\Scholarships\ScholarshipRecipient;
use App\Models\Scholarships\ScholarshipRegistrant;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];
    
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Relasi dengan Competition Registrants (pendaftar lomba)
    public function competitionRegistrants()
    {
        return $this->belongsToMany(CompetitionRegistrant::class, 'user_competition_registrants');
    }

    // Relasi dengan Scholarship Registrants (pendaftar beasiswa)
    public function scholarshipRegistrants()
    {
        return $this->belongsToMany(ScholarshipRegistrant::class, 'user_scholarship_registrants');
    }

    // Relasi dengan Competition Winners (pemenang lomba)`
    public function competitionWinners()
    {
        return $this->belongsToMany(CompetitionWinner::class, 'user_competition_winners');
    }

    // Relasi dengan Scholarship Recipients (penerima beasiswa)
    public function scholarshipRecipients()
    {
        return $this->belongsToMany(ScholarshipRecipient::class, 'user_scholarship_recipients');
    }
}