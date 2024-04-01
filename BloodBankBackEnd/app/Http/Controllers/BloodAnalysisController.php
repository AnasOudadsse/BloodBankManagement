<?php

namespace App\Http\Controllers;

use App\Models\AnalysisReport;
use App\Models\BloodAnalysis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class BloodAnalysisController extends Controller
{

    public function store(Request $request){
        $validatedAnalysis = $request->validate([
            'isGood' => ['required'],
            'AnalysisReport' => 'required',
            ]);

        if ($request->hasFile('AnalysisReport')){
            Log::info("file received");
            $reportPath = $request->file('AnalysisReport')->store('donors/reports','public');
        }
        else{
            Log::info('file not received');
        }
        
        $analysisReport = new BloodAnalysis([
            'isGood'  => $validatedAnalysis['isGood'],
            'AnalysisReport' => $reportPath
        ]);

        $analysisReport->save();

        return response()->json($analysisReport, 201);

    }

}
