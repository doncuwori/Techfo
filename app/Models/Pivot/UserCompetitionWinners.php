<?php

namespace App\Models\Pivot;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCompetitionWinners extends Model
{
    use HasFactory;
    protected $table = 'user_competition_winners';

    protected $fillable = [
        'user_id',
        'competition_id',
        'created_at',
        'updated_at',
    ];

}
