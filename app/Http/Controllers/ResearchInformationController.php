<?php

namespace App\Http\Controllers;

use App\Models\ResearchInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResearchInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
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
        $abdimas = ResearchInformation::create([
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

        
        return redirect()->route('tambahInfoPenelitian')->with('success', 'Informasi beasiswa berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(ResearchInformation $researchInformation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ResearchInformation $researchInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ResearchInformation $researchInformation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ResearchInformation $researchInformation)
    {
        //
    }
}
