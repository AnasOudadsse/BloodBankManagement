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
            'Status' => 'required',
            'blood_id' => 'required',
            'hospital_id' => 'required'
        ]);

        BloodRequest::create($validateRequest);

        return  response()->json(['message' => "Successfully Created"],201);
    }
}
