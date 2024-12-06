<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\CompetitionRegistrantController;
use App\Http\Controllers\Controller;
use App\Models\Competition;
use App\Models\CompetitionRegistrant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminCompetitionRegistrantController extends Controller
{
    public function index(){
        $competitions = CompetitionRegistrant::with('users')->get();

        return Inertia::render('Admin/DashboardAdmin', [
            'competitions' => $competitions,
            
        ]);
    }
}