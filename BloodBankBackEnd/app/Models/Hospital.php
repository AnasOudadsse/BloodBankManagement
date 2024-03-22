<?php

namespace App\Models;

use App\Models\BloodRequest;
use App\Models\HospitalStaff;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Hospital extends Model
{
    use HasFactory;

    public function bloodRequest(){
        return $this->hasMany(BloodRequest::class);
    }
    
    public function hopsitalStaff(){
        return $this->hasMany(HospitalStaff::class);
    }
    

    protected $fillable = ['Name', 'Address', 'PhoneNumber'];

}
