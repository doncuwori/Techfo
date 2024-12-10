<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Competitions\CompetitionRegistrant;
use App\Models\Competitions\CompetitionWinner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminAbdimasController extends Controller
{
    public function index(){
        $competitionRegistrantsCount = CompetitionRegistrant::count();
        $competitionWinnersCount = CompetitionWinner::count();

        $user = auth()->user();

        return Inertia::render('Admin/Laporan/LaporanAbdimas', [
            'competitionRegistrantsCount' => $competitionRegistrantsCount,
            'competitionWinnersCount' => $competitionWinnersCount,
            'user' => $user,
        ]);
    }
}