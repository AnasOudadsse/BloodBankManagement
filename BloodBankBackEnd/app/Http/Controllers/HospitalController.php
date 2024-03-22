<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hospital;


class HospitalController extends Controller
{
    public function storeHospital(Request $request)
    {
        $hospital = Hospital::create($request->all());

        return response()->json($hospital, 201);
    }
}