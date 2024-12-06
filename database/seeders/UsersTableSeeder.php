<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class usersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'nim' => '1234567890',
            'prodi' => 'Teknik Informatika',
            'angkatan' => '2019',
            'email' => 'admin@example.com',
            'role' => 'admin',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'User',
            'nim' => '0987654321',
            'prodi' => 'Teknik Informatika',
            'angkatan' => '2019',
            'email' => 'user@example.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'John Doe',
            'nim' => '1122334455',
            'prodi' => 'Sistem Informasi',
            'angkatan' => '2020',
            'email' => 'john@example.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Jane Smith',
            'nim' => '2233445566',
            'prodi' => 'Teknik Komputer',
            'angkatan' => '2021',
            'email' => 'jane@example.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Alice Johnson',
            'nim' => '3344556677',
            'prodi' => 'Teknik Elektro',
            'angkatan' => '2022',
            'email' => 'alice@example.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);

        User::create([
            'name' => 'Bob Brown',
            'nim' => '4455667788',
            'prodi' => 'Teknik Mesin',
            'angkatan' => '2023',
            'email' => 'bob@example.com',
            'role' => 'user',
            'password' => Hash::make('password'),
        ]);
    }
}