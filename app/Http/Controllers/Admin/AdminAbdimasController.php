<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Abdimas\AbdimasRegistrant;
use App\Models\Abdimas\AbdimasRecipient;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminAbdimasController extends Controller
{
    public function index(){
        $abdimasRegistrantsCount = AbdimasRegistrant::count();
        $abdimasRecipientsCount = AbdimasRecipient::count();

        $user = auth()->user();

        return Inertia::render('Admin/Laporan/LaporanAbdimas', [
            'abdimasRegistrantsCount' => $abdimasRegistrantsCount,
            'abdimasRecipientsCount' => $abdimasRecipientsCount,
            'user' => $user,
        ]);
    }
}