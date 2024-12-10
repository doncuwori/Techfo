<?php

namespace App\Http\Controllers\LandingPage;

use App\Http\Controllers\Controller;

use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionWinner;
use App\Models\Scholarships\ScholarshipRecipient;
use App\Models\Scholarships\ScholarshipRegistrant;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionWinnersCount = CompetitionWinner::count();
        $scholarshipRegistrantsCount = ScholarshipRegistrant::count();
        $scholarshipRecipientsCount = ScholarshipRecipient::count();



        return Inertia::render('LandingPage', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionWinnersCount' => $competitionWinnersCount,
            'scholarshipRegistrantsCount' => $scholarshipRegistrantsCount,
            'scholarshipRecipientsCount' => $scholarshipRecipientsCount,
        ]);
    }
}