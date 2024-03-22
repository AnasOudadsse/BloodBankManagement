<?php

namespace App\Models;

use App\Models\Donor;
use App\Models\Donation;
use App\Models\BloodRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodType extends Model
{
    use HasFactory;

    public function donor(){
        return $this->hasMany(Donor::class);
    }
    
    public function donation(){
        return $this->hasMany(Donation::class);
    }
    
    public function BloodRequest(){
        return $this->hasMany(BloodRequest::class);
    }
    

    protected $fillable = ['BloodType'];

}
