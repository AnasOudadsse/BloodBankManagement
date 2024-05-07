<?php

namespace App\Http\Controllers;

use App\Models\BloodCamp;
use Illuminate\Http\Request;
use App\Models\BloodCampStaff;
use Illuminate\Support\Facades\Hash;


class BloodCampStaffController extends Controller
{
    public function getBloodCamps()
    {
        $bloodCamps = BloodCamp::all(); // Fetch all bloodcamps, or use any condition you like
        return response()->json($bloodCamps);
    }

    public function storeBloodCampStaff(Request $request){

        $BCstaff = new BloodCampStaff([
            
            'Cin' => $request->input('Cin'),
            'Name' => $request->input('Name'),
            'PhoneNumber' => $request->input('PhoneNumber'),
            'Email' => $request->input('Email'),
            'BirthDate' => $request->input('BirthDate'),
            'Gender' => $request->input('Gender'),
            'EncryptedPassword' => Hash::make($request->input('EncryptedPassword')),
            'Role' => $request->input('Role'),
            'blood_camp_id' => $request->input('blood_camp_id'),
        ]);
        $BCstaff->save();
        
        return response()->json($BCstaff, 201);
    }
}
