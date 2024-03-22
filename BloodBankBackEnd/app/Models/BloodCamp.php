<?php

namespace App\Models;

use App\Models\Donation;
use App\Models\BloodCampStaff;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodCamp extends Model
{
    use HasFactory;

    public function donation(){
        return $this->hasMany(Donation::class);
    }

    public function bloodCampStaff(){
        return $this->hasMany(BloodCampStaff::class);
    }
    
    protected $fillable = ['Name', 'Address', 'StartTime', 'EndTime'];

}
