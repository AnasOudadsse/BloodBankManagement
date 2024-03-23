<?php

namespace App\Http\Controllers;

use App\Models\BloodCamp;
use Illuminate\Http\Request;


class BloodCampController extends Controller
{
    public function storeBloodCamp(Request $request){
        // dd($request->all());
        $bloodCamp = BloodCamp::create($request->all());

        return response()->json($bloodCamp, 201);
    }
}
