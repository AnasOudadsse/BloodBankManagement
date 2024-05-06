<?php

namespace App\Http\Controllers;

use App\Models\Hospital;
use Illuminate\Http\Request;


class HospitalController extends Controller
{
    public function storeHospital(Request $request)
    {
        $hospital = Hospital::create($request->all());

        return response()->json($hospital, 201);
    }
}