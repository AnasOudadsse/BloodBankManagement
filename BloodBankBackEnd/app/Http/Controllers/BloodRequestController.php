<?php

namespace App\Http\Controllers;

use App\Models\BloodRequest;
use Illuminate\Http\Request;

class BloodRequestController extends Controller
{
    public function store(Request $request){
        $validateRequest = $request->validate([
            'Quantity' => 'required',
            'Urgency'=> 'required',
            'blood_id' => 'required',
            'hospital_id' => 'required'
        ]);

        BloodRequest::create($validateRequest);

        return  response()->json(['message' => "Successfully Created"],201);
    }


    function getBloodRequetsWithBloodAndHospital(){
        $bloodRequest = BloodRequest::with('bloodType','hospital')->get();

        return  response()->json($bloodRequest);
    }
}
