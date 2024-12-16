<?php

namespace App\Http\Controllers;

use App\Models\Abdimas\AbdimasInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AbdimasInformationController extends Controller
{
    public function index()
    {
        // return view('competition-information');
        $user = auth()->user();

        return Inertia::render('Admin/PusatInformasi/TambahInfoAbdimas', [
            'user' => $user,
        ]);
    }

    public function store(Request $request){
        $user = Auth::user();
        $request->validate([
            'name' => 'required|string|max:255',
            'lecturer_1' => 'required|string|max:255',
            'lecturer_2' => 'string|max:255',
            'lecturer_3' => 'string|max:255',
            'lecturer_4' => 'string|max:255',
            'lecturer_5' => 'string|max:255',
            'registration_start' => 'required|date',
            'registration_end' => 'required|date',
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
            'registration_start' => $request->registration_start,
            'registration_end' => $request->registration_end,
            'location' => $request->location,
            'total_students_required' => $request->total_students_required,
            'created_by' => $user->id,
            'description' => $request->description,
            // TODO:
            // 'assignment_letter_url' => "https://www.google.com",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Return a response
        return redirect()->route('tambahInfoAbdimas')->with('success', 'Informasi pengabdian Masyarakat berhasil ditambahkan');
    }

    public function show(AbdimasInformation $postId) {
        return Inertia::render('User/Abdimas/DetailAbdimas', [
            'data' => $postId
        ]);
    }
}
