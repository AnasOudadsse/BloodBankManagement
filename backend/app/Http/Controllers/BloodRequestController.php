<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use App\Models\BloodRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

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

        $validated = $request->validate([
            'BloodType' => 'required|numeric',
            'Quantity'  => 'required|numeric',
            'Status'    => 'required|string',
            'id'        => 'required|numeric',
        ]);

        $bloodRequest = BloodRequest::find($request->id);

        if ($bloodRequest) {
            $bloodRequest->update([
                'Status' => $request->Status
            ]);

            Log::info('The status is updated', ['status' => $request->Status]);
        } else {
            Log::warning('Blood request not found', ['id' => $request->id]);
        }

        

        if ($validated['Status'] === "approved") {
            $inventory = Inventory::where('blood_type_id', $validated['BloodType'])->firstOrFail();

            if ($inventory->quantity_available >= $validated['Quantity']) {
                
                $inventory->quantity_available -= $validated['Quantity'];
                $inventory->save();
                
                Log::info('The inventory data has been updated');
                return response()->json("The inventory data has been updated", 200);
            } else {
                // If not enough quantity, throw an exception
                Log::info('Not enough inventory to fulfill the request.');

                throw new \Exception('Not enough inventory to fulfill the request.');
            }
        }
        else{
            return response()->json("status not tracked", 200);
        }

        return response()->json("The data has been updated", 200);

}

    function deleteRequest(Request $request){
        $bloodRequest = BloodRequest::find($request->id);

        $bloodRequest->delete();

        return response()->json("The data has been deleted");
    }
}
