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




    //  // Validate input data, including Role
    //  $request->validate([
    //     //  'Role' => 'required|string',
    //      'Email' => 'required|email',
    //      'EncryptedPassword' => 'required',
    //  ]);

    //  // Retrieve credentials from the request
    //  $credentials = $request->only('Email', 'EncryptedPassword');

    //  // Determine the appropriate guard based on Role
     
    //  $Role = $request->input('Role');
    //  $guard = match ($Role) {
    //      'Donor' => 'Donor',
    //      'Admin' => 'bloodbankadmins',
    //      'HospitalStaff' => 'hospitalstaff',
    //      'BloodCampStaff' => 'bloodcampstaff',
    //      'LabTech' => 'labtech',
    //      'superadmin' => 'superadmin',
    //      default => null,
    //  };

    //  if (!$guard) {
    //      return response()->json(['message' => 'Invalid user type'], 400);
    //  }



    //  // Attempt authentication using the determined guard
    //  if (Auth::guard($guard)->attempt($credentials)) {
    //      $user = Auth::guard($guard)->user();

    //      // Generate a token if needed (using Sanctum or JWT, for example)
    //     //  $token = $user->createToken('YourAppToken')->plainTextToken;

    //      // Log successful login
    //      Log::info('Login successful', ['user_id' => $user->id, 'Role' => $Role]);

    //      // Respond with success, user information, and token
    //      return response()->json([
    //          'success' => true,
    //         //  'token' => $token,
    //          'Role' => $Role,
    //         //  'user' => $user,
    //          'message' => 'Login successful'
    //      ], 200);
    //  }

    //  // Log failed login attempt
    //  Log::warning('Login failed', ['Email' => $credentials['Email'], 'Role' => $Role]);

    //  // Respond with failure
    // //  $p = Hash::make('abo');
    // //  $o = Hash::make('abo');
    // //  Log::info($p);
    // //  Log::info($o);
    // //  if (Hash::check('abo',$p)) 
    // //  {
    // //      Log::info('the same password');
    // //  }
    // //  else
    // //  {
    // //      Log::info('not the same password');
    // //  }
    //  return response()->json(['x²' => 'Unauthorized'], 401);
 }
}
