<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Illuminate\Http\Request;
use App\Models\HospitalStaff;
use Illuminate\Support\Facades\Hash;

class HospitalStaffController extends Controller
{
    public function getHospitals()
    {
        $hospital = Hospital::all(); // Fetch all staff, or use any condition you like
        return response()->json($hospital);
    }

    public function storeHospitalStaff(Request $request){
        $Hstaff = new HospitalStaff([
            
            'Cin' => $request->input('Cin'),
            'Name' => $request->input('Name'),
            'PhoneNumber' => $request->input('PhoneNumber'),
            'Email' => $request->input('Email'),
            'BirthDate' => $request->input('BirthDate'),
            'Gender' => $request->input('Gender'),
            'EncryptedPassword' => Hash::make($request->input('EncryptedPassword')),
            'Role' => $request->input('Role'),
            'Position' => $request->input('Position'),
            'hospital_id' => $request->input('hospital_id'),
        ]);
        $Hstaff->save();
    
        return response()->json($Hstaff, 201);
    }
}
