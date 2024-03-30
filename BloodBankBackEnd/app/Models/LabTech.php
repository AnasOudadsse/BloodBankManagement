<?php

namespace App\Models;

use App\Models\BloodAnalysis;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LabTech extends Model
{
    use HasFactory;

    public function bloodAnalysis(){
        return $this->hasMany(BloodAnalysis::class);
    }

    public function bloodBank(){
        return $this->belongsTo(BloodBank::class);
    }

    protected $fillable = ['Cin','Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role','blood_bank_id'];

}
