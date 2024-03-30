<?php

namespace App\Http\Controllers;

use App\Models\LabTech;
use Illuminate\Http\Request;

class LabTechController extends Controller
{


    public function store(request $request){
        $validateLabTech= $request->validate([
            'Cin' => 'required|unique:lab_teches',
            'Name' => 'required',
            'PhoneNumber'=> 'required|unique:lab_teches',
            'Email'=> 'required|unique:lab_teches', 
            'BirthDate'=> 'required',
            'Gender'=> 'required',
            'EncryptedPassword'=> 'required',
            'Role' => 'required|in:LabTech',
            'blood_bank_id' => 'required|in:1'
        ]);

        LabTech::create($validateLabTech);
        return response()->json('The labtech has been created successfully');
    }

}
