<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index () {
        if (Auth::check()) {
            $user = Auth::user();
            if ($user->role == 'admin') {
                return redirect()->route('dashboardAdmin');
            }
            return redirect()->route('dashboardUser');
        } else {
            return redirect()->route(route: 'loginUser');
        }
    }
}
