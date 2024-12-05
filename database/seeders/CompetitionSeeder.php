<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Competition;
use App\Models\CompetitionRegistrant;

class CompetitionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CompetitionRegistrant::create(attributes: [
            'is_group' => false,
            'leader_nim' => '1234567890', // Admin
            'ormawa_delegation' => 'HIMTI',
            'mentor_name' => 'Dr. Alice Pembimbing',
            'activity_name' => 'Hackathon 2023',
            'field' => 'Pemrograman',
            'organizer' => 'Komunitas Teknologi',
            'host_country' => 'Indonesia',
            'location' => 'Jakarta',
            'activity_date_start' => '2023-11-01',
            'activity_date_end' => '2023-11-03',
            'description' => 'Sebuah acara hackathon tingkat nasional.',
            'poster_url' => 'http://example.com/posters/hackathon2023.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        CompetitionRegistrant::create(attributes:
        [
            'is_group' => true,
            'leader_nim' => '0987654321', // User
            'ormawa_delegation' => 'HIMTI',
            'mentor_name' => 'Prof. Bob Pembimbing',
            'activity_name' => 'Simposium AI',
            'field' => 'Kecerdasan Buatan',
            'organizer' => 'Institut AI',
            'host_country' => 'Singapura',
            'location' => 'Kota Singapura',
            'activity_date_start' => '2024-01-15',
            'activity_date_end' => '2024-01-17',
            'description' => 'Simposium internasional tentang kemajuan AI.',
            'poster_url' => 'http://example.com/posters/simposium_ai2024.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        CompetitionRegistrant::create(attributes:[
            'is_group' => false,
            'leader_nim' => '1122334455', // John Doe
            'ormawa_delegation' => 'HIMSI',
            'mentor_name' => 'Dr. Jane Pembimbing',
            'activity_name' => 'Workshop Data Science',
            'field' => 'Data Science',
            'organizer' => 'Big Data Co.',
            'host_country' => 'Amerika Serikat',
            'location' => 'San Francisco',
            'activity_date_start' => '2023-12-10',
            'activity_date_end' => '2023-12-12',
            'description' => 'Workshop praktis untuk penggemar data science.',
            'poster_url' => 'http://example.com/posters/data_science2023.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        CompetitionRegistrant::create(attributes:[
            'is_group' => true,
            'leader_nim' => '2233445566', // Jane Smith
            'ormawa_delegation' => 'HIMTEK',
            'mentor_name' => 'Prof. Steve Pembimbing',
            'activity_name' => 'Kompetisi Robotika',
            'field' => 'Robotika',
            'organizer' => 'Organisasi Robotika Global',
            'host_country' => 'Jepang',
            'location' => 'Tokyo',
            'activity_date_start' => '2024-02-20',
            'activity_date_end' => '2024-02-22',
            'description' => 'Kompetisi robotika tingkat internasional.',
            'poster_url' => 'http://example.com/posters/robotika2024.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        CompetitionRegistrant::create(attributes:[
            'is_group' => false,
            'leader_nim' => '3344556677', // Alice Johnson
            'ormawa_delegation' => 'HIMTE',
            'mentor_name' => 'Dr. Mark Pembimbing',
            'activity_name' => 'Pameran Teknik Elektro',
            'field' => 'Teknik Elektro',
            'organizer' => 'Masyarakat Teknik Elektro',
            'host_country' => 'Jerman',
            'location' => 'Berlin',
            'activity_date_start' => '2024-03-10',
            'activity_date_end' => '2024-03-12',
            'description' => 'Pameran inovasi dalam bidang teknik elektro.',
            'poster_url' => 'http://example.com/posters/teknik_elektro2024.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        CompetitionRegistrant::create(attributes:[
            'is_group' => true,
            'leader_nim' => '4455667788', // Bob Brown
            'ormawa_delegation' => 'HMM',
            'mentor_name' => 'Prof. Anne Pembimbing',
            'activity_name' => 'Expo Desain Mekanik',
            'field' => 'Teknik Mesin',
            'organizer' => 'Masyarakat Desain Teknik',
            'host_country' => 'Kanada',
            'location' => 'Toronto',
            'activity_date_start' => '2024-04-05',
            'activity_date_end' => '2024-04-07',
            'description' => 'Expo yang menampilkan proyek desain mekanik.',
            'poster_url' => 'http://example.com/posters/desain_mekanik2024.png',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
