<?php

use Illuminate\Support\Facades\Route;
use App\Mail\TestEmail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testEmail', function () {
    $name = 'joe rogan';
    Mail::to('milanouda2000@gmail.com')->send(new TestEmail($name));

    return 'Test email sent successfully.';
});