<?php

namespace App\Models\Abdimas;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbdimasInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lecturer_1',
        'lecturer_2',
        'lecturer_3',
        'lecturer_4',
        'lecturer_5',
        'registration_start',
        'registration_end',
        'location',
        'total_students_required',
        'created_by',
        'description',
        'assignment_letter_url',
    ];
}