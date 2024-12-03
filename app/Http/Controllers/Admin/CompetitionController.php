<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Competition;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompetitionController extends Controller
{
    public function index(){
        $competitions = Competition::all();

        return Inertia::render('Admin/dashboardAdmin', [
            'competitions' => $competitions,
        ]);
    }
}
