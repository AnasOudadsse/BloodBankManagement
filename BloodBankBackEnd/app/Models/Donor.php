<?php

namespace App\Models;

use App\Models\Donation;
use App\Models\BloodType;
use App\Models\Notification;
use App\Models\AnalysisReport;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Donor extends Authenticatable
{
    use Notifiable;
    use HasFactory;
    use HasApiTokens;
    
    protected $primaryKey = 'Cin';
    public $incrementing = false;
    protected $keyType = 'string';


    public function donation(){
        return $this->hasMany(Donation::class);
    }

    public function notification(){
        return $this->hasMany(Notification::class);
    }

    public function analysisReport(){
        return $this->hasMany(AnalysisReport::class);
    }

    public function bloodType(){
        return $this->belongsTo(BloodType::class);
    }


    protected $fillable = ['Cin','Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role', 'City', 'Address', 'Image','blood_id'];

    
}
