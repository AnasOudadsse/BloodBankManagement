<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Inventory extends Model
{
    use HasFactory;

    public function bloodtype(){
        return $this->belongsTo(BloodType::class);

    }

    public function bloodBank(){
        return $this->belongsTo(BloodBank::class, 'blood_id');

    }

    protected  $fillable = ['blood_type_id','blood_bank_id','quantity_available'];
}
