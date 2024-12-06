<?php

namespace App\Http\Controllers;

use App\Models\AbdimasInformation;
use App\Models\Competitions\CompetitionInformation;
use App\Models\researchInformation;
use App\Models\Scholarships\ScholarshipInformation;

use Inertia\Inertia;

class DashboardUserController extends Controller
{
    public function index(){
        $competitionsInformation = CompetitionInformation::latest()->take(8)->get();
        $scholarshipsInformation = ScholarshipInformation::latest()->take(8)->get();
        $abdimasInformation = AbdimasInformation::latest()->take(8)->get();
        $researchInformation = researchInformation::latest()->take(8)->get();
    
        return Inertia::render('User/DashboardUser', [
            'competitions_information' => $competitionsInformation,
            'scholarships_information' => $scholarshipsInformation,
            'abdimas_information' => $abdimasInformation,
            'researches_information' => $researchInformation
        ]);
    }
}
