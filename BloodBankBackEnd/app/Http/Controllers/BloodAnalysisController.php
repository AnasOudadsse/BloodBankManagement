<?php

namespace App\Http\Controllers;

use App\Models\AnalysisReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class BloodAnalysisController extends Controller
{

    public function store(Request $request){
        $validatedAnalysis = $request->validate([
            'isGood' => ['required'],
            'AnalysisReport' => 'required|file|mimes:pdf,docx',
            ]);

        if ($request->hasFile('AnalysisReport')){
            Log::info("file received");
            $reportPath = $request->file('AnalysisReport')->store('donors/reports','public');
        }
        else{
            Log::info('file not received');
        }
        
        $analysisReport = new AnalysisReport([
            'isGood'  => $validatedAnalysis['isGood'],
            'AnalysisReport' => $reportPath
        ]);

        $analysisReport->save();

        return response()->json($analysisReport, 201);

    }

}
