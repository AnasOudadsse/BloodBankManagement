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
        

        return response()->json([
        
        'QuantityAvailable' => $QuantityAvailable,
        'QuantityDonated' => $QuantityDonated,
        'QuantityDistributed' => $QuantityDistributed,
        'PendingRequests' => $PendingRequests,
        'TotalDonors' => $TotalDonors
    ]);
    }}
