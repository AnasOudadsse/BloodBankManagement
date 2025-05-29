<?php

namespace App\Models;

use App\Models\Donor;
use App\Models\BloodCamp;
use App\Models\BloodType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Donation extends Model
{
    use HasFactory;

    public function bloodCamp(){
        return $this->belongsTo(BloodCamp::class);
    }
    
    public function bloodType(){
        return $this->belongsTo(BloodType::class);
    }
    
    public function donor(){
        return $this->belongsTo(Donor::class, 'donor_cin', 'Cin');
    }
    
    public function bloodAnalysis(){
        return $this->hasOne(BloodAnalysis::class);
    }
    
    public function analysisReport(){
        return $this->hasOne(BloodAnalysis::class);
    }

    public function bloodCampStaff()
{
    return $this->belongsTo(BloodCampStaff::class);
}

    
    protected $fillable = ['QuantityDonated', 'DonationDate', 'donor_cin', 'blood_type_id', 'blood_camp_id', 'bloodcampstaff_cin'];

}
