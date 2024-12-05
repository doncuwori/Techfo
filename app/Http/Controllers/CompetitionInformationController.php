<?php

namespace App\Http\Controllers;

use App\Models\ScholarshipInformation;
use Illuminate\Http\Request;

class CompetitionInformationController extends Controller
{
    //

    public function index()
    {
        // return view('competition-information');
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'organizer' => 'required|string|max:255',
            'event_time' => 'required|date',
            'description' => 'required|string',
            'poster_url' => 'required|url',
        ]);

        // Create a new scholarship information record
        $scholarship = ScholarshipInformation::create([
            'name' => $request->name,
            'organizer' => $request->organizer,
            'event_time' => $request->event_time,
            'description' => $request->description,
            'poster_url' => $request->poster_url,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Return a response
        return redirect()->route('pusatInformasi/tambahInfoBeasiswa')->with('success', 'Informasi beasiswa berhasil ditambahkan');
    }
}

