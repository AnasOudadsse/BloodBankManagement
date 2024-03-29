<?php

namespace App\Http\Controllers;

use App\Models\BloodBankAdmin;
use Illuminate\Http\Request;

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


         BloodBankAdmin::create($validateAdmin);
            return  response()->json(['message'=> $validateAdmin['Name']. " has been added as an admin for the blood bank."]);
    }

}
