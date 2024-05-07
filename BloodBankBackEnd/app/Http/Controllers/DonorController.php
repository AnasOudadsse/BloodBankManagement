<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Donor;
use App\Mail\TestEmail;
use App\Models\BloodType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;


class DonorController extends Controller
{
    public function getBloodType()
    {
        $bloodType = BloodType::all(); // Fetch all bloodtype, or use any condition you like
        return response()->json($bloodType);
    }

    public function storeDonor(Request $request) {
        // Validate the incoming request data
        $validatedData = $request->validate([

            'Cin' => 'required|string',
            'Name' => 'required|string',
            'PhoneNumber' => 'required',
            'Email' => 'required|email',
            'BirthDate' => 'required|date',
            'Gender' => 'required',
            'EncryptedPassword' => 'required',
            'Role' => 'required',
            'City' => 'required|string',
            'Address' => 'required|string',
            'blood_id' => 'required|integer',
            'Image' => 'required|file|image|max:10240',
        ]);
    
        // Handle the file upload
        if ($request->hasFile('Image')) {
            Log::info('File received');
            $imagePath = $request->file('Image')->store('donors/images', 'public');
            Log::info('File stored at: ' . $imagePath);
        } else {
            Log::info('No file received');
            // Default handling as necessary
        }
    
        // Create the donor record, including the path of the uploaded image
        $donor = new Donor([
            
            'Cin' => $request->input('Cin'),
            'Name' => $request->input('Name'),
            'PhoneNumber' => $request->input('PhoneNumber'),
            'Email' => $request->input('Email'),
            'BirthDate' => $request->input('BirthDate'),
            'Gender' => $request->input('Gender'),
            'EncryptedPassword' => Hash::make($request->input('EncryptedPassword')),
            'Role' => $request->input('Role'),
            'City' => $request->input('City'),
            'Address' => $request->input('Address'),
            'Image' => $imagePath, // Store the image path
            'blood_id' => $request->input('blood_id'),
        ]);
        $donor->save();
    
        return response()->json($donor, 201);
    }


    public function sendAlertNotif(Request $request){
        $validatedData = $request->validate([
            'bloodType' => 'required',
            'city' => 'required',
            'title' => 'required',
            'message' => 'required',
        ]);

        $bloodType = $validatedData['bloodType'];
        $city = $validatedData['city'];
    
        $donors = Donor::where('blood_id', $bloodType)
                       ->where('City', $city)
                       ->get();


        $title = $validatedData['title'];
        $emailContent = $validatedData['message'];

        // $filePath = storage_path('app\public\donors\reports\WcmKzx8PKfTSvTKQNesflsjcI7H54k8Gw0Vn6r9R.pdf');
        foreach ($donors as $donor){
                    $donorName =  $donor->Name;
                    Mail::to($donor->Email)->send(new TestEmail($title, $emailContent, $donorName));
        }



        return 'Test email sent successfully.';
    }        

    
    public function getImage($id)
    {
        $donor = Donor::where('Cin',$id)->first();
        Log::info($donor);
        if ($donor) {
            return response()->json([
                'image_url' => url('/storage/' . $donor->Image)
            ]);
            Log::info('image_url');
        } else {
            return response()->json(['error' => 'Donor not found'], 404);
            Log::info('image_url');

        }
    }
}
