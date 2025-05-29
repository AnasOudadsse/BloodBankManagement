<?php

namespace App\Models;

use App\Models\BloodAnalysis;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LabTech extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    use Notifiable;

    protected $primaryKey = 'Cin';
    public $incrementing = false;
    protected $keyType = 'string';
    
    public function bloodAnalysis(){
        return $this->hasMany(BloodAnalysis::class);
    }

    public function bloodBank(){
        return $this->belongsTo(BloodBank::class);
    }

    protected $fillable = ['Cin','Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role','blood_bank_id'];

}
