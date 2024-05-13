<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\Donation;
use App\Models\Inventory;
use App\Models\BloodRequest;
use Illuminate\Http\Request;

class Dashboard extends Controller
{
    public static function dashboard()
    {
        $QuantityAvailable = Inventory::sum('quantity_available');
        $QuantityDonated = Donation::sum('QuantityDonated');
        $QuantityDistributed = BloodRequest::where('Status', 'approved')->sum('Quantity');
        $PendingRequests = BloodRequest::where('Status', 'pending')->count();
        $TotalDonors = Donor::count();
        
        $Aplus = Inventory::where('blood_type_id', 1)->get('quantity_available');
        $Aminus = Inventory::where('blood_type_id', 2)->get('quantity_available');
        $Bplus = Inventory::where('blood_type_id', 3)->get('quantity_available');
        $Bminus = Inventory::where('blood_type_id', 4)->get('quantity_available');
        $Oplus = Inventory::where('blood_type_id', 5)->get('quantity_available');
        $Ominus = Inventory::where('blood_type_id', 6)->get('quantity_available');
        $ABplus = Inventory::where('blood_type_id', 7)->get('quantity_available');
        $ABminus = Inventory::where('blood_type_id', 8)->get('quantity_available');


        return response()->json([
        
        'QuantityAvailable' => $QuantityAvailable,
        'QuantityDonated' => $QuantityDonated,
        'QuantityDistributed' => $QuantityDistributed,
        'PendingRequests' => $PendingRequests,
        'TotalDonors' => $TotalDonors,
        'APositive' => $Aplus[0]->quantity_available,
        'ANegative' => $Aminus[0]->quantity_available,
        'BPositive' => $Bplus[0]->quantity_available,
        'BNegative' => $Bminus[0]->quantity_available,
        'OPositive' => $Oplus[0]->quantity_available,
        'ONegative' => $Ominus[0]->quantity_available,
        'ABPositive' => $ABplus[0]->quantity_available,
        'ABNegative' => $ABminus[0]->quantity_available
    ]);
    }}
