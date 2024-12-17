<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Researchs\ResearchInformation;
use Inertia\Inertia;

class PusatInformasiPenelitianController extends Controller
{
    public function index(){
        $user = auth()->user();

        $data = ResearchInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/PusatInformasi/PusatPenelitian', [
            'user' => $user,
            'data' => $data
        ]);
    }
}