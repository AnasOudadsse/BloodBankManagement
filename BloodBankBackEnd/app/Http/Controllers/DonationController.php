<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\Donation;
use App\Models\BloodCamp;
use Illuminate\Http\Request;

class DonationController extends Controller
{


    // Search for donors based on a query
    public function searchDonors(Request $request)
    {
        $query = $request->input('q');
        $donors = Donor::where('name', 'like', "%{$query}%")->get();
        return response()->json($donors);
    }

        // Search for blood camps based on a query
        public function searchBloodCamps(Request $request)
        {
            $query = $request->input('q');
            $camps = BloodCamp::where('name', 'like', "%{$query}%")->get();
            return response()->json($camps);
        }

        // Record a new donation
        public function storeDonation(Request $request)
        {
            // Validate the incoming request data including 'blood_type'
            $validated = $request->validate([
                'donor_cin' => 'required',
                'blood_camp_id' => 'required',
                'QuantityDonated' => 'required|numeric',
                'DonationDate' => 'required|date',
                'blood_type_id' => 'required', 
            ]);
    
            // Create the donation record with the validated data
            $donation = Donation::create($validated);
            
            return response()->json($donation, 201);
        }

        public function getDonationsWithDonors(){
            $DonationsWithDonors = Donation::with('donor')->get();

            return  response()->json($DonationsWithDonors);
        }

        public function getDonations($id){
            $donations =Donation::with('donor')->find($id);
            return response()->json($donations);
        }

        function deleteDonation(Request $request){
            $donation = Donation::find($request->id);
    
            $donation->delete();
    
            return response()->json("The donation has been deleted");
        }
    
        function updateDonation(Request $request){
            $donation = Donation::find($request->id);  

            $validatedData = $request->validate([
                'DonationDate' => 'required|date',
                'QuantityDonated' => 'required|numeric|min:1',
                'blood_camp_id' => 'required|numeric',
                'blood_type_id' => 'required|numeric', 
                'donor_cin' => 'required|string|max:255',
            ]);

            $donation->update([
                'DonationDate' => $validatedData['DonationDate'] ,
                'QuantityDonated' => $validatedData['QuantityDonated'] ,
                'blood_camp_id'=> $validatedData['blood_camp_id'] ,
                'blood_type_id' => $validatedData['blood_type_id'] ,
                'donor_cin' => $validatedData['donor_cin'] ,
            ]);

            return response()->json(['data' => $donation], 200);        }

        
}
