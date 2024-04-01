<?php

namespace App\Models;

use App\Models\LabTech;
use App\Models\Donation;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodAnalysis extends Model
{
    use HasFactory;
    protected $table = 'blood_analysis';
    public function donation(){
        return $this->belongsTo(Donation::class);
    }
    public function labTech(){
        return $this->belongsTo(LabTech::class);
    }



    protected $fillable = ['IsGood','AnalysisReport' ,'lab_tech_cin' ,'donation_id'];
}
