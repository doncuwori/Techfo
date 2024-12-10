<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PusatInformasiBeasiswaController extends Controller
{
    public function index(){
        $user = auth()->user();

        return Inertia::render('Admin/PusatInformasi/PusatBeasiswa', [
            'user' => $user,
        ]);
    }
}