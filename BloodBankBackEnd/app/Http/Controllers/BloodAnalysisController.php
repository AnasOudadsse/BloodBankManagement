<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BloodAnalysisController extends Controller
{

    public function store(Request $request){
        $validatedAnalysis = $request->validate([
            'isGood' => ['required'],
            'AnalysisReport' => 'required|file|mimes:pdf,docx',
            ]);


        
    }

}
