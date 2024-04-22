<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use App\Models\Inventory;
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

    // If the donation is good, update the inventory
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

}
