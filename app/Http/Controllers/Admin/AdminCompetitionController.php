<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CompetitionRegistrantController;
use App\Http\Controllers\Controller;
use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionWinner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCompetitionController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionWinnersCount = CompetitionWinner::count();

        $user = auth()->user();

        $registrant = CompetitionRegistrant::with('users')->orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/Laporan/LaporanLomba', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionWinnersCount' => $competitionWinnersCount,
            'user' => $user,
            'registrant' => $registrant
        ]);
    }
}