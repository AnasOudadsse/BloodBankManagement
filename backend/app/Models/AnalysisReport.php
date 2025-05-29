<?php

namespace App\Models;

use App\Models\Donation;
use App\Models\BloodBankAdmin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AnalysisReport extends Model
{
    use HasFactory;

    public function donor(){
        return $this->belongsTo(Donor::class);
    }

    public function donation(){
        return $this->belongsTo(Donation::class);
    }

    public function bloodBankAdmin(){
        return $this->belongsTo(BloodBankAdmin::class);
    }


    protected $fillable = ['DateGenerated', 'PdfLocation', 'donation_id', 'donor_id', 'blood_bank_admin_id'];

}
