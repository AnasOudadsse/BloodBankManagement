<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Method for user login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'role' => 'required' // Assuming the role is needed to determine the guard
        ]);
    
        $guard = $credentials['role'];
        if (Auth::guard($guard)->attempt($credentials)) {
            $request->session()->regenerate();
    
            // Returning user data and redirect URL or intentions
            return response()->json([
                'success' => true,
                'message' => 'Authentication successful',
                'user' => Auth::guard($guard)->user(),
            ]);
        }
    
        return response()->json([
            'success' => false,
            'message' => 'The provided credentials do not match our records.',
        ], 401);
    }
    
}
