<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PusatInformasiAbdimasController extends Controller
{
    public function index(){
        $user = auth()->user();

        return Inertia::render('Admin/PusatInformasi/PusatAbdimas', [
            'user' => $user,
        ]);
    }
}