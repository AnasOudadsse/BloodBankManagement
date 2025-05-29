<?php

namespace App\Models;

use App\Models\BloodCamp;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodCampStaff extends Authenticatable
{
    use HasFactory, Notifiable;
    use HasApiTokens;

    protected $primaryKey = 'Cin';
    public $incrementing = false;
    protected $keyType = 'string';
    
    public function bloodCamp(){
        return $this->belongsTo(BloodCamp::class);
    }

    public function donation()
{
    
    return $this->hasMany(Donation::class);
}

    protected $fillable = ['Cin', 'Name', 'PhoneNumber', 'Email', 'BirthDate', 'Gender', 'EncryptedPassword', 'Role', 'blood_camp_id'];

}
