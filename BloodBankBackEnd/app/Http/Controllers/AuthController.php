<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\LabTech;
use Illuminate\Http\Request;
use App\Models\HospitalStaff;
use App\Models\BloodBankAdmin;
use App\Models\BloodCampStaff;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{    
 // Method for multi-guard user login
 public function login(Request $request)
 {

        $loginUserData = $request->validate([
            // 'Role' => 'required|string',
            'Email'=>'required|string|email',
            'EncryptedPassword'=>'required'
        ]);

        
    // Iterate through models to find the user
        $user = null;
        $role = null;
        $models = [
            ['model' => Donor::class, 'role' => 'Donor'],
            ['model' => BloodBankAdmin::class, 'role' => 'Admin'],
            ['model' => HospitalStaff::class, 'role' => 'HospitalStaff'],
            ['model' => BloodCampStaff::class, 'role' => 'BloodCampStaff'],
            ['model' => LabTech::class, 'role' => 'LabTech'],
            // ['model' => Super::class, 'role' => 'SuperAdmin'],
        ];
        
        foreach ($models as $item) {
            $model = $item['model'];
            $role = $item['role'];
            $user = $model::where('Email', $loginUserData['Email'])->first();
            if ($user) {
                // Break if user found                
                Log::info('user found');

                break;
            }}

        if(!$user || !Hash::check($loginUserData['EncryptedPassword'],$user->EncryptedPassword)){
            return response()->json([
                'message' => 'Invalid Credentials'
            ],401);
        }
        Log::info('here is the user', [$user]);
        $token = $user->createToken($user->Email.'-AuthToken')->plainTextToken;
        return response()->json([
            'access_token' => $token,
            'role' => $role,
            'user' => $user,
        ]);
   
 }

 public function logout(Request $request)
 {
     // Revoke the token that was used to authenticate the current request
     $request->user()->currentAccessToken()->delete();

     return response()->json(['message' => 'Logged out successfully'], 200);
 }
}
