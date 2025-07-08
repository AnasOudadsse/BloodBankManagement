<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BloodBank;
use App\Models\BloodBankAdmin;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Create a BloodBank
        $bloodBank = BloodBank::create([
            'Name' => 'Central Blood Bank',
            'Address' => '123 Main St, City',
            'Phone' => '1234567890',
        ]);

        // Create an Admin user for the BloodBank
        BloodBankAdmin::create([
            'Cin' => 'ADMIN001',
            'Name' => 'Admin User',
            'PhoneNumber' => '1234567890',
            'Email' => 'anas.oudadsse1@gmail.com',
            'BirthDate' => '1980-01-01',
            'Gender' => 'Male',
            'EncryptedPassword' => Hash::make('aouda@9855'),
            'Role' => 'Admin',
            'is_super_admin' => true,
            'blood_bank_id' => $bloodBank->id,
        ]);
    }
}
