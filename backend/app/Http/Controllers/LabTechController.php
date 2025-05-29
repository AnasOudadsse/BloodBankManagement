<?php

namespace App\Http\Controllers;

use App\Models\LabTech;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LabTechController extends Controller
{


    public function store(request $request){
             $request->validate([
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

        $labtech = new LabTech([
            
            'Cin' => $request->input('Cin'),
            'Name' => $request->input('Name'),
            'PhoneNumber' => $request->input('PhoneNumber'),
            'Email' => $request->input('Email'),
            'BirthDate' => $request->input('BirthDate'),
            'Gender' => $request->input('Gender'),
            'EncryptedPassword' => Hash::make($request->input('EncryptedPassword')),
            'Role' => $request->input('Role'),
            'blood_bank_id' => $request->input('blood_bank_id'),
        ]);
        $labtech->save();

        return response()->json('The labtech has been created successfully');
    }

}
