<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;

    public function bloodtype(){
        return $this->belongsTo(BloodType::class);

    }

    public function bloodBank(){
        return $this->belongsTo(BloodBank::class);

    }

    protected  $fillable = ['blood_type_id','blood_bank_id','quantity_available'];
}
