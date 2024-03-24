<?php

namespace App\Http\Controllers;

use App\Models\BloodCamp;
use App\Models\BloodCampStaff;
use Illuminate\Http\Request;

class BloodCampStaffController extends Controller
{
    public function getBloodCamps()
    {
        $bloodCamps = BloodCamp::all(); // Fetch all bloodcamps, or use any condition you like
        return response()->json($bloodCamps);
    }

    public function storeBloodCampStaff(Request $request){
        $BCstaff = BloodCampStaff::create($request->all());
        return response()->json($BCstaff, 201);
    }
}
