<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Abdimas\AbdimasInformation;
use Inertia\Inertia;

class PusatInformasiAbdimasController extends Controller
{
    public function index(){
        $user = auth()->user();

        $data = AbdimasInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('Admin/PusatInformasi/PusatAbdimas', [
            'user' => $user,
            'data' => $data
        ]);
    }
}