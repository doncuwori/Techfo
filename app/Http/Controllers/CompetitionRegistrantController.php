<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CompetitionRegistrant;
use App\Models\UserCompetitionRegistrant;
use App\Models\User;
use App\Models\UserCompetitionRegistrants;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CompetitionRegistrantController extends Controller
{
    
    /**
     * Show the form for creating a new resource.
     */
    public function store(Request $request)
    {      
        $user = Auth::user();
       
        $request->validate([
            'is_group' => 'required',
            "ormawa_delegation" => 'required',
            "mentor_name" => 'required',
            "activity_name" => 'required',
            "field" => 'required',
            "organizer" => 'required',
            "host_country" => 'required',
            "location" => 'required',
            "activity_date_start" => 'required',
            "activity_date_end" => 'required',
            "description" => 'required',
        ]);

        $competition = CompetitionRegistrant::create([
            'is_group' => $request->is_group,
            'leader_nim' => $user->nim,
            'ormawa_delegation' => $request->ormawa_delegation,
            'mentor_name' => $request->mentor_name,
            'activity_name' => $request->activity_name,
            'field' => $request->field,
            'organizer' => $request->organizer,
            'host_country' => $request->host_country,
            'location' => $request->location,
            'activity_date_start' => $request->activity_date_start,
            'activity_date_end' => $request->activity_date_end,
            'description' => $request->description,
            'poster_url' => $request->poster_url,
            'created_at' => now(),
            'updated_at' => now(),
            ]
        );

        if($request->is_group == true){
            $request->validate([
                'members' => 'required|array',
                'members.*.nim' => 'required|exists:users,nim',
                'members.*.name' => 'required|string',
            ]);
    
            foreach ($request->members as $member) {
                $member = User::where('nim', $member->nim)->first();
    
                if ($member) {
                    UserCompetitionRegistrants::create([
                        'user_id' => $member->id,
                        'competition_id' => $competition->id,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]);
                } else {
                    // Handle the case where the user with the given NIM does not exist
                    return response()->json(['error' => "User with NIM $member does not exist."], 404);
                }
            }        
        }

        UserCompetitionRegistrants::create([
            'user_id' => $user->id,
            'competition_id' => $competition->id,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $competition->load('users');

        return redirect()->route('pendataanLomba')->with('success', 'Kompetisi berhasil ditambahkan');
    }

    /**
     * Display a listing of the resource.
     */     
    public function index()
    {
        $competitions = CompetitionRegistrant::all();
        return response()->json($competitions, 201);
    }

}
