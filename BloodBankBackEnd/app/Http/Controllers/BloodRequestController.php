<?php

namespace App\Http\Controllers;

use Log;
use App\Models\Inventory;
use App\Models\BloodRequest;
use Illuminate\Http\Request;

class BloodRequestController extends Controller
{
    public function store(Request $request){
        $validateRequest = $request->validate([
            'Quantity' => 'required',
            'Urgency'=> 'required',
            'blood_id' => 'required',
            'hospital_id' => 'required'
        ]);

        BloodRequest::create($validateRequest);

        return  response()->json(['message' => "Successfully Created"],201);
    }


    function getBloodRequetsWithBloodAndHospital(){
        $bloodRequest = BloodRequest::with('bloodType','hospital')->get();

        return  response()->json($bloodRequest);
    }

    function getBloodRequest($id){
        $bloodRequest = BloodRequest::with('bloodType','hospital')->where('id', $id)->get();

       return response()->json($bloodRequest);
    }

    function updateBloodRequest(request $request){
        $bloodRequest = BloodRequest::find($request->id);

        $bloodRequest->update([
            'Quantity' => $request->Quantity,
            'Urgency'=> $request->Urgency ,
            'blood_id' => $request->blood_id ,
            'hospital_id' => $request->hospital_id
        ]);

        return response()->json("The data has been updated");
    }
    function updateBloodRequestStatus(request $request){
        $bloodRequest = BloodRequest::find($request->id);

        $bloodRequest->update([
            'Status' => $request->Status
        ]);
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
        return response()->json("The data has been updated");

        
    }

    function deleteRequest(Request $request){
        $bloodRequest = BloodRequest::find($request->id);

        $bloodRequest->delete();

        return response()->json("The data has been deleted");
    }
}
