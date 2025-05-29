<?php

namespace App\Models;

use App\Models\LabTech;
use App\Models\Inventory;
use App\Models\BloodBankAdmin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodBank extends Model
{
    use HasFactory;

    public function bloodBankAdmin(){
        return $this->hasMany(BloodBankAdmin::class);
    }

    public function inventory(){
        return $this->hasMany(Inventory::class);
    }
    public function labTech(){
        return $this->hasMany(LabTech::class);
    }



    protected $fillable = ['Name','Address', 'Phone' ];
}
