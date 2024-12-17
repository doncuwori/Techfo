<?php

namespace App\Http\Controllers;

use App\Models\Scholarships\ScholarshipRecipient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScholarshipRecipientController extends Controller
{
    public function store(Request $request)
    {
        // Get the authenticated user
        $user = Auth::user();

        
        // Validate incoming request data
        $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'organizer' => 'required|string',
            'host_country' => 'required|string',
            'event_date' => 'required|date',
            'description' => 'required|string',
            
        ]);


        // Create new ScholarshipRecipient
        $scholarship = ScholarshipRecipient::create([
            'name' => $request->name,
            'type' => $request->type,
            'organizer' => $request->organizer,
            'host_country' => $request->host_country,
            'event_date' => $request->event_date,
            'description' => $request->description,
            'proof_scan_url' => $request->poster_url,
            'created_by' => $user->id,  
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Attach the user to the scholarship recipient table
        $scholarship->users()->attach($user->id);

        // Return success response or redirect
        return redirect()->route('pendataanBeasiswa')->with('success', 'Beasiswa berhasil ditambahkan');
    }
}
