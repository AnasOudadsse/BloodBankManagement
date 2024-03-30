<?php

use App\Http\Controllers\BloodBankAdminController;
use App\Http\Controllers\BloodBankController;
use App\Http\Controllers\BloodCampController;
use App\Http\Controllers\BloodCampStaffController;
use App\Http\Controllers\BloodRequestController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\HospitalStaffController;
use App\Http\Controllers\LabTechController;
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

route::get('/getBloodType', [DonorController::class, 'getBloodType']);

route::Post('/addDonor', [DonorController::class, 'storeDonor']);

route::get('searchDonors', [DonationController::class, 'searchDonors']);

route::get('searchBloodCamps', [DonationController::class, 'searchBloodCamps']);

route::post('addDonation', [DonationController::class, 'storeDonation']);

route::post('addBloodRequest', [BloodRequestController::class, 'store']);

route::post('addAdmin', [BloodBankAdminController::class , 'store']);

route::post('addLabTech', [LabTechController::class , 'store']);

