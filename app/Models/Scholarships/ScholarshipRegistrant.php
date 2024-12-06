<?php

namespace App\Models\Scholarships;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScholarshipRegistrant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'organizer',
        'host_country',
        'event_date',
        'description',
        'created_by',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_scholarship_registrants');
    }

}