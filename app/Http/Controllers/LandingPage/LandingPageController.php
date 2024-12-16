<?php

namespace App\Http\Controllers\LandingPage;

use App\Http\Controllers\Controller;

use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionAchievement;
use App\Models\Scholarships\ScholarshipRecipient;
use App\Models\Scholarships\ScholarshipRegistrant;
use Inertia\Inertia;

class LandingPageController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionAchievementsCount = CompetitionAchievement::count();
        $scholarshipRegistrantsCount = ScholarshipRegistrant::count();
        $scholarshipRecipientsCount = ScholarshipRecipient::count();



        return Inertia::render('LandingPage', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionAchievementsCount' => $competitionAchievementsCount,
            'scholarshipRegistrantsCount' => $scholarshipRegistrantsCount,
            'scholarshipRecipientsCount' => $scholarshipRecipientsCount,
        ]);
    }
}