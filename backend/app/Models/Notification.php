<?php

namespace App\Models;

use App\Models\Donor;
use App\Models\BloodBankAdmin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Notification extends Model
{
    use HasFactory;

    public function bloodBankAdmin(){
        return $this->belongsTo(BloodBankAdmin::class);
    }
    
    public function donor(){
        return $this->belongsTo(Donor::class);
    }   


    protected $fillable = ['Message','Date', 'Status', 'donor_id', 'blood_bank_admin_id'];

}
