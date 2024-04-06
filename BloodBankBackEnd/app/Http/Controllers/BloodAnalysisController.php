<?php

namespace App\Http\Controllers;

use App\Models\AnalysisReport;
use App\Models\BloodAnalysis;
use App\Models\Donor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Mail\ReportMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class BloodAnalysisController extends Controller
{

    public function store(Request $request){
        $validatedAnalysis = $request->validate([
            'IsGood' => 'required',
            'AnalysisReport' => 'required',
            ]);


        
        $analysisReport = new BloodAnalysis([
            'IsGood'  => $request->input('IsGood'),
            //the report is being added in the sendReport function bellow
        ]);

        $analysisReport->save();

        return response()->json($analysisReport, 201);
    }

    public function sendReport(Request $request){
        $validatedAnalysis = $request->validate([
            'AnalysisReport' => 'required',
            'donorCin' => 'required|string'
            ]);
        $donorCin = $validatedAnalysis['donorCin'];

        $reportPath = $request->file('AnalysisReport')->store('donors/reports', 'public');
        $reportPath = Storage::disk('public')->path($reportPath); 
        \Log::info('Report Path: ' . $reportPath);

        // $reportPath = storage_path('app\public\donors\reports\WcmKzx8PKfTSvTKQNesflsjcI7H54k8Gw0Vn6r9R.pdf');
        $donor = Donor::find($donorCin);

        $donorName =  $donor->Name;
        Mail::to($donor->Email)->send(new ReportMail($reportPath, $donorName));
    
        return 'Report email sent successfully.';
    }

}
