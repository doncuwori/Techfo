<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionAchievement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminAbdimasController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionAchievementsCount = CompetitionAchievement::count();

        $user = auth()->user();

        return Inertia::render('Admin/Laporan/LaporanAbdimas', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionAchievementsCount' => $competitionAchievementsCount,
            'user' => $user,
        ]);
    }
}