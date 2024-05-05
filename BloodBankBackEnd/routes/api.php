<?php

use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DonorController;
use App\Http\Controllers\LabTechController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\BloodBankController;
use App\Http\Controllers\BloodCampController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\BloodRequestController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\BloodAnalysisController;
use App\Http\Controllers\HospitalStaffController;
use App\Http\Controllers\BloodBankAdminController;
use App\Http\Controllers\BloodCampStaffController;

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

Route::middleware(['auth:sanctum'])->group(function () {

route::post('/addHospital', [HospitalController::class, 'storeHospital']);

route::post('/addBloodCamp', [BloodCampController::class, 'storeBloodCamp']);

route::get('/getHospitals', [HospitalStaffController::class, 'getHospitals']);

route::Post('/addHospitalStaff', [HospitalStaffController::class, 'storeHospitalStaff']);

route::get('/getBloodCamps', [BloodCampStaffController::class, 'getBloodCamps']);

route::Post('/addBloodCampStaff', [BloodCampStaffController::class, 'storeBloodCampStaff']);

route::get('searchDonors', [DonationController::class, 'searchDonors']);

route::get('searchBloodCamps', [DonationController::class, 'searchBloodCamps']);

route::post('addDonation', [DonationController::class, 'storeDonation']);

route::post('addBloodRequest', [BloodRequestController::class, 'store']);

route::post('addAdmin', [BloodBankAdminController::class , 'store']);

route::post('addLabTech', [LabTechController::class , 'store']);

route::get('donationList', [DonationController::class , 'getDonationsWithDonors']);

route::get('getDonations', [DonationController::class , 'getDonations']);

Route::get('/addAnalysis/{id}', [DonationController::class , 'getDonations']);

route::post('addAnalysis', [BloodAnalysisController::class ,'store']);

route::post('addNotification', [DonorController::class, 'send']);

Route::post('addNotification', [DonorController::class, 'sendAlertNotif'] );

route::post('addAnalysis', [BloodAnalysisController::class, 'sendReport']);

route::get('getBloodRequests', [BloodRequestController::class,'getBloodRequetsWithBloodAndHospital']);

route::get('editBloodRequest/{id}', [BloodRequestController::class,'getBloodRequest']);

route::put('updateBloodRequest', [BloodRequestController::class,'updateBloodRequest']);

route::middleware(['auth:sanctum', 'role:Admin'])->put('updateBloodRequestStatus', [BloodRequestController::class,'updateBloodRequestStatus']);

// route::put('updateBloodRequestStatus', [InventoryController::class,'updateInventoryFromDeliveredRequests']);

route::post('deleteRequest', [BloodRequestController::class,'deleteRequest']);

route::post('deleteDonation', [DonationController::class,'deleteDonation']);

route::post('addAnalysis', [InventoryController::class, 'verifyDonation']);

route::get('editDonation/{id}', [DonationController::class, 'getDonationsWithDonors']);

route::put('updateDonation', [DonationController::class, 'updateDonation']);
});

Route::post('/login', [AuthController::class, 'login']);
    

Route::get('/isLogged', function (Request $request) {
    return response()->json(['isLoggedIn' => $request->user() ? true : false]);
});

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

route::Post('/addDonor', [DonorController::class, 'storeDonor']);

route::get('/getBloodType', [DonorController::class, 'getBloodType']);
