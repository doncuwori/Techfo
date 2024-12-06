<?php

namespace App\Http\Controllers;

use App\Models\AbdimasInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AbdimasInformationController extends Controller
{
    public function store(Request $request){
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'lecturer_1' => 'required|string|max:255',
            'lecturer_2' => 'required|string|max:255',
            'lecturer_3' => 'required|string|max:255',
            'lecturer_4' => 'required|string|max:255',
            'lecturer_5' => 'required|string|max:255',
            'registration_deadline' => 'required|date',
            'location' => 'required|string|max:255',
            'total_students_required' => 'required|integer',
            'description' => 'required|string'
            // 'assignment_letter_url' => 'required|url',
        ]);
        
        
        // Create a new abdimas information record
        $abdimas = AbdimasInformation::create([
            'name' => $request->name,
            'lecturer_1' => $request->lecturer_1,
            'lecturer_2' => $request->lecturer_2,
            'lecturer_3' => $request->lecturer_3,
            'lecturer_4' => $request->lecturer_4,
            'lecturer_5' => $request->lecturer_5,
            'registration_deadline' => $request->registration_deadline,
            'location' => $request->location,
            'total_students_required' => $request->total_students_required,
            'created_by' => $user->id,
            'description' => $request->description,
            // TODO:
            'assignment_letter_url' => "https://www.google.com",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Return a response
        return redirect()->route('tambahInfoAbdimas')->with('success', 'Informasi beasiswa berhasil ditambahkan');
    }
}