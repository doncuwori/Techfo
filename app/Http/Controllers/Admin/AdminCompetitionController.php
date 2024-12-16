<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CompetitionRegistrantController;
use App\Http\Controllers\Controller;
use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionAchievement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCompetitionController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionAchievementsCount = CompetitionAchievement::count();

        $user = auth()->user();

        $registrant = CompetitionRegistrant::with('users')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/Laporan/LaporanLomba', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionAchievementsCount' => $competitionAchievementsCount,
            'user' => $user,
            'registrant' => $registrant
        ]);
    }
}