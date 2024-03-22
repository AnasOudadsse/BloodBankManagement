<?php

namespace App\Models;

use App\Models\BloodBankAdmin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BloodBank extends Model
{
    use HasFactory;

    public function bloodBankAdmin(){
        return $this->hasMany(BloodBankAdmin::class);
    }

    protected $fillable = ['QuantityAvailable'];
}
