<?php

namespace App\Http\Controllers;

use App\Models\ScholarshipInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScholarshipInformationController extends Controller
{
    public function store(Request $request){
        $user = Auth::user();
        
        $request->validate([
            'name' => 'required|string|max:255',
            'organizer' => 'required|string|max:255',
            'event_time' => 'required|date',
            'description' => 'required|string',
            // 'poster_url' => 'required|url',
        ]);

        // Create a new scholarship information record
        $competition = ScholarshipInformation::create([
            'name' => $request->name,
            'organizer' => $request->organizer,
            'event_time' => $request->event_time,
            'description' => $request->description,
            'poster_url' => $request->poster_url,
            'created_by' => $user->id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Return a response
        return redirect()->route('tambahInfoBeasiswa')->with('success', 'Informasi beasiswa berhasil ditambahkan');
    }
}
