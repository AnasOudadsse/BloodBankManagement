<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HospitalStaff extends Model
{
    use HasFactory;

    public function hospital(){
        return $this->belongsTo(Hospital::class);
    }

    protected $fillable = ['Cin','Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role', 'Position', 'hospital_id'];

}
