<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use Illuminate\Http\Request;
use App\Notifications\DonorAlert;
use Illuminate\Support\Facades\Notification;


class NotificationController extends Controller
{

    public function send(Request $request)
{
    $validatedData = $request->validate([
        'title' => 'required|string',
        'message' => 'required|string',
    ]);

    $users = Donor::all(); //
    Notification::send($users, new DonorAlert($validatedData['title'], $validatedData['message']));

    return response()->json(['message' => 'Notification sent successfully.']);
}

}
