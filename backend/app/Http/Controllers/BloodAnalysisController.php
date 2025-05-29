<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Mail\ReportMail;
use App\Models\Donation;
use App\Models\Inventory;
use Illuminate\Http\Request;
use App\Models\BloodAnalysis;
use App\Models\AnalysisReport;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class BloodAnalysisController extends Controller
{

    // public function store(Request $request){
    //     $validatedAnalysis = $request->validate([
    //         'IsGood' => 'required',
    //         'AnalysisReport' => 'required',
    //         ]);


        
    //     $analysisReport = new BloodAnalysis([
    //         'IsGood'  => $request->input('IsGood'),
    //         //the report is being added in the sendReport function bellow
    //     ]);

    //     $analysisReport->save();

    //     return response()->json($analysisReport, 201);
    // }

    public function sendReport(Request $request){

    // Validate input
    $validated = $request->validate([
        'IsGood' => 'required',
        'AnalysisReport' => 'required|file',
        'donorCin' => 'required|string'
    ]);

    // Store the report
    if (!$request->hasFile('AnalysisReport')) {
        Log::error('No file uploaded');
        return response()->json(['message' => 'No file uploaded'], 400);
    }

    $reportPath = $request->file('AnalysisReport')->store('donors/reports', 'public');
    if (!$reportPath) {
        Log::error('File could not be stored');
        return response()->json(['message' => 'File storage failed'], 400);
    }

    $reportPath = Storage::disk('public')->path($reportPath);

    // Create BloodAnalysis record with the report path
    $analysisReport = new BloodAnalysis([
        'IsGood' => $validated['IsGood'],
        'AnalysisReport' => $reportPath, // Include this in your model's fillable if not already done
    ]);

    $analysisReport->save();

    // Handle donor and send report email
    $donor = Donor::find($validated['donorCin']);
    if (!$donor) {
        Log::error('Donor not found with CIN: ' . $validated['donorCin']);
        return response()->json(['message' => 'Donor not found'], 404);
    }

    Mail::to($donor->Email)->send(new ReportMail($reportPath, $donor->Name));

    
        /////////////////////////////

        //updating the quantity
        $donation = Donation::find($request->donation_id);
    
        if (!$donation) {
            return response()->json(['message' => 'Donation not found'], 404);
        }
    
        $IsGood = $request->input('IsGood');
        $donation->save();
    
        // If the donation is good the inventory is updated
        if ($IsGood == 1) {
            $inventory = Inventory::where('blood_type_id', $donation->blood_type_id)->first();
    
            if ($inventory) {
                $inventory->quantity_available += $donation->QuantityDonated;
                $inventory->save();
            } else {
                return response()->json(['message' => 'inventory not found'], 404);
            }
        }
    
        return response()->json(['message' => 'Donation verified successfully']);
    }

}
