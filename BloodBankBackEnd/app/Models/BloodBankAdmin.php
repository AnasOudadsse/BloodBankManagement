<?php

namespace App\Models;

use App\Models\BloodBank;
use App\Models\Notification;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodBankAdmin extends Authenticatable
{
    use HasFactory, Notifiable;
    use HasApiTokens;

    protected $primaryKey = 'Cin';
    public $incrementing = false;
    protected $keyType = 'string';
    
    public function bloodBank(){
        return $this->belongsTo(BloodBank::class);
    }

    public function notification(){
        return $this->hasMany(Notification::class);
    }

    public function analysisReport(){
        return $this->hasMany(AnalysisReport::class);
    }

    protected $fillable = ['Cin','Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role', 'blood_bank_id'];
}
