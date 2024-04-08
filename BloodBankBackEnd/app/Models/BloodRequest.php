<?php

namespace App\Models;

use App\Models\Hospital;
use App\Models\BloodType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodRequest extends Model
{
    use HasFactory;
    
    public function hospital(){
        return $this->belongsTo(Hospital::class);
    }
    
    public function bloodType(){
        return $this->belongsTo(BloodType::class, 'blood_id');
    }

    protected $fillable = ['Quantity', 'Urgency', 'Status', 'blood_id', 'hospital_id'];

    
}
