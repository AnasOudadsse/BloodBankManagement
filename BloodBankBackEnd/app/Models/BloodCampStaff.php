<?php

namespace App\Models;

use App\Models\BloodCamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodCampStaff extends Model
{
    use HasFactory;

    public function bloodCamp(){
        return $this->belongsTo(BloodCamp::class);
    }

    protected $fillable = ['Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role', 'blood_camp_id'];

}
