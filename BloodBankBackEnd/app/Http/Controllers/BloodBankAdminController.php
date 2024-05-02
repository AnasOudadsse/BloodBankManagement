<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BloodBankAdmin;
use Illuminate\Support\Facades\Hash;

class BloodBankAdminController extends Controller
{

    public function store(request $request){
        $validateAdmin = $request->validate([
            'Cin' => 'required|unique:blood_bank_admins',
            'Name' => 'required',
            'PhoneNumber'=> 'required|unique:blood_bank_admins',
            'Email'=> 'required|unique:blood_bank_admins', 
            'BirthDate'=> 'required',
            'Gender'=> 'required',
            'EncryptedPassword'=> 'required',
            'Role' => 'required|in:Admin',
            'is_super_admin' => 'required',
            'blood_bank_id' => 'required|in:1'
        ]);

        $admin = new BloodBankAdmin(
            [
                'Cin' => $request->input('Cin'),
                'Name' => $request->input('Name'),
                'PhoneNumber' => $request->input('PhoneNumber'),
                'Email' => $request->input('Email'),
                'BirthDate' => $request->input('BirthDate'),
                'Gender' => $request->input('Gender'),
                'EncryptedPassword' => Hash::make($request->input('EncryptedPassword')) ,
                'Role' => $request->input('Role'),
                'is_super_admin' => $request->input('is_super_admin'),
                'blood_bank_id' => $request->input('blood_bank_id')
            ]
            );      
                    
            
            $admin->save();

            return  response()->json(['message'=> $validateAdmin['Name']. " has been added as an admin for the blood bank."]);
    }

}
