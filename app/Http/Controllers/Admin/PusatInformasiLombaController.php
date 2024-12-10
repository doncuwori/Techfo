<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PusatInformasiLombaController extends Controller
{
    public function index(){
        $user = auth()->user();

        return Inertia::render('Admin/PusatInformasi/PusatLomba', [
            'user' => $user,
        ]);
    }
}