<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\LabTech;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\HospitalStaff;
use App\Models\BloodBankAdmin;
use App\Models\BloodCampStaff;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

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

            
        // Iterateé through models to find the user
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

    // public function resetPassword(Request $request)
    // {
    //     $request->validate([
    //         'current_password' => 'required',
    //         'new_password' => 'required',
    //     ]);

    //     $user = Auth::user();
    //     if (!Hash::check($request->current_password, $user->password)) {
    //         return response()->json(['message' => 'Current password does not match'], 401);
    //     }

    //     $user->password = Hash::make($request->new_password);
    //     $user->save();

    //     return response()->json(['message' => 'Password changed successfully']);
    // }

    public function sendResetLinkEmail(Request $request)
    {
        // Validate the request
        $request->validate([
            'Email' => 'required|email'
        ]);
    
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
            $user = $model::where('Email', $request->Email)->first();
            if ($user) {
                // Break if user found                
                Log::info('user found');

                break;
            }}
        // Retrieve user based on the email
    
        if (!$user) {
            return response()->json(['message' => "We can't find a user with that email address."], 404);
        }
    
        // Generate a random token
        $token = Hash::make(Str::random(60));
    
        // Store the token in the database
        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $user->Email],
            [
                'email' => $user->Email,
                'token' => $token,
                'created_at' => now()
            ]
        );
    
        // Send the email with the reset link
        $resetLink = url('/password/reset/' . $token);
        try{
            Mail::send('mail.reset', ['link' => $resetLink], function ($message) use ($user) {
            $message->to($user->Email);
            $message->subject('Reset Password Notification');
        });
        }catch (\Exception $e) {
            Log::error('Failed to send password reset email: ' . $e->getMessage());
            return response()->json(['message' => 'Failed to send password reset email.'], 500);
        }

    
        return response()->json(['message' => 'Reset link sent to your email address.']);
    }
    }
