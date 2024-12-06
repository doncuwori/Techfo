<?php

namespace App\Http\Controllers;

use App\Models\Competitions\CompetitionWinner;
use App\Models\User;
use App\Models\Pivot\UserCompetitionWinners;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CompetitionWinnerController extends Controller
{
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

        $competition = CompetitionWinner::create([
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
            "achievement_level" => $request->achievement_level,
            'proof_scan_url' => $request->proof_scan_url,
            'event_photo_url' => $request->event_photo_url,
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
    
            foreach ($request->members as $memberData) {
                $member = User::where('nim', $memberData['nim'])->first();
    
                if ($member) {
                    $competition->users()->attach($member->id);
                } else {
                    // Handle the case where the user with the given NIM does not exist
                    return response()->json(['error' => "User with NIM $member does not exist."], 404);
                }
            }        
        }

        $competition->users()->attach($user->id);

        return redirect()->route('pendataanLomba')->with('success', 'Kompetisi berhasil ditambahkan');
    }
}
