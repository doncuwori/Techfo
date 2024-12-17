<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Researchs\ResearchRegistrant;
use App\Models\Researchs\ResearchRecipient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminResearchController extends Controller
{
    public function index(){
        $researchRegistrantsCount = ResearchRegistrant::count();
        $researchRecipientsCount = ResearchRecipient::count();

        $user = auth()->user();

        return Inertia::render('Admin/Laporan/LaporanPenelitian', [
            'researchRegistrantsCount' => $researchRegistrantsCount,
            'researchRecipientsCount' => $researchRecipientsCount,
            'user' => $user,
        ]);
    }
}