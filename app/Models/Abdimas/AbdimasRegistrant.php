<?php

namespace App\Models\Abdimas;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbdimasRegistrant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'telephone',
        'organizer',
        'khs',
        'cv',
        'portofolio',
        'foto',
        'created_by',
    ];

    /**
     * Relasi dengan tabel users melalui tabel pivot user_abdimas_registrants.
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_abdimas_registrants');
    }
}
