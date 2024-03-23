<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use App\Models\HospitalStaff;
use Illuminate\Http\Request;

class HospitalStaffController extends Controller
{
    public function getHospitals()
    {
        $hospital = Hospital::all(); // Fetch all staff, or use any condition you like
        return response()->json($hospital);
    }

    public function storeHospitalStaff(Request $request){
        $Hstaff = HospitalStaff::create($request->all());
        return response()->json($Hstaff, 201);
    }
}
