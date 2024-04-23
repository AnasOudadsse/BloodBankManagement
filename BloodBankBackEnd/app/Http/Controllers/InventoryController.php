<?php

namespace App\Http\Controllers;

use Log;
use App\Models\Donation;
use App\Models\Inventory;
use App\Models\BloodRequest;
use Illuminate\Http\Request;

class InventoryController extends Controller
{

public function verifyDonation(Request $request) {
    $donation = Donation::find($request->donation_id);
    
    if (!$donation) {
        return response()->json(['message' => 'Donation not found'], 404);
    }

    $IsGood = $request->input('IsGood');
    $donation->save();

    // If the donation is good the inventory is updated
    if ($IsGood == 1) {
        $inventory = Inventory::where('blood_type_id', $donation->blood_type_id)->first();

        if ($inventory) {
            $inventory->quantity_available += $donation->QuantityDonated;
            $inventory->save();
        } else {
            return response()->json(['message' => 'inventory not found'], 404);
        }
    }

    return response()->json(['message' => 'Donation verified successfully']);
}

    public function updateInventoryFromDeliveredRequests() {
        // Fetch all delivered blood requests that have not yet been processed
        $deliveredRequests = BloodRequest::where('status', 'approved')
                                        ->get();

        foreach ($deliveredRequests as $request) {
            // Assume there's a relationship set up to fetch the related blood type
            $bloodType = $request->bloodType;

            // Update the inventory
            $inventory = Inventory::where('blood_type_id', $bloodType->id)->first();
            if ($inventory) {
                $inventory->quantity_available -= $request->quantity;
                $inventory->save();

                Log::info("Updated inventory for blood type {$bloodType->id}: Decrement by {$request->quantity}");
            }
        }
}

}
