<?php

namespace App\Models;

use App\Models\Donation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodAnalysis extends Model
{
    use HasFactory;

    public function donation(){
        return $this->belongsTo(Donation::class);
    }

    protected $fillable = ['IsGood', 'donation_id'];
}
