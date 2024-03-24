<?php

use App\Http\Controllers\BloodCampController;
use App\Http\Controllers\BloodCampStaffController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\HospitalStaffController;
use App\Models\BloodCampStaff;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

route::post('/addHospital', [HospitalController::class, 'storeHospital']);

route::post('/addBloodCamp', [BloodCampController::class, 'storeBloodCamp']);

route::get('/getHospitals', [HospitalStaffController::class, 'getHospitals']);

route::Post('/addHospitalStaff', [HospitalStaffController::class, 'storeHospitalStaff']);

route::get('/getBloodCamps', [BloodCampStaffController::class, 'getBloodCamps']);

route::Post('/addBloodCampStaff', [BloodCampStaffController::class, 'storeBloodCampStaff']);

