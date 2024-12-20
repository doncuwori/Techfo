<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function Pest\Laravel\call;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(usersTableSeeder::class);
        $this->call(CompetitionSeeder::class);    
        $this->call(UserCompetitionRegistrantSeeder::class);
        $this->call(InformationSeeder::class);
    }
}