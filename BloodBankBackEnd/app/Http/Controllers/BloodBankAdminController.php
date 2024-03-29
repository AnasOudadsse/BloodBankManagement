<?php

namespace App\Http\Controllers;

use App\Models\BloodBankAdmin;
use Illuminate\Http\Request;

class BloodBankAdminController extends Controller
{

    public function store(request $request){
        $validateAdmin = $request->validate([
            'Cin' => 'required|unique',
            'Name' => 'required',
            'PhoneNumber'=> 'required|unique',
            'Email'=> 'required|unique',
            'BirthDate'=> 'required',
            'Gender'=> 'required',
            'EncryptedPassword'=> 'required',
            'Role' => 'Admin',
            'is_super_admin' => 'required',
            'blood_bank_id' => '1'
        ]);


        $admin = BloodBankAdmin::create($validateAdmin);
            return  response()->json(['message'=> $validateAdmin['Name']. " has been added as an admin for the blood bank."]);
    }

}
