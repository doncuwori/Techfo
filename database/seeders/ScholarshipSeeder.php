<?php

namespace Database\Seeders;

use App\Models\Scholarships\ScholarshipRegistrant;
use App\Models\Scholarships\ScholarshipRecipient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScholarshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Scholarship Registrants
        ScholarshipRegistrant::create([
            'name' => 'Rudi Pratama',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Komunitas Teknologi',
            'host_country' => 'Indonesia',
            'event_date_start' => '2023-11-01',
            'event_date_end' => '2023-11-03',
            'description' => 'Beasiswa teknologi untuk mahasiswa terbaik.',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Dina Sulistiana',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Institut AI',
            'host_country' => 'Singapura',
            'event_date_start' => '2024-01-15',
            'event_date_end' => '2024-01-17',
            'description' => 'Beasiswa untuk pengembangan kecerdasan buatan.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Ahmad Yusuf',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Big Data Co.',
            'host_country' => 'Amerika Serikat',
            'event_date_start' => '2023-12-10',
            'event_date_end' => '2023-12-12',
            'description' => 'Beasiswa untuk pelatihan dan sertifikasi Data Science.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Nina Saraswati',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Organisasi Robotika Global',
            'host_country' => 'Jepang',
            'event_date_start' => '2024-02-20',
            'event_date_end' => '2024-02-22',
            'description' => 'Beasiswa untuk pengembangan riset robotika.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Budi Santoso',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Masyarakat Teknik Elektro',
            'host_country' => 'Jerman',
            'event_date_start' => '2024-03-10',
            'event_date_end' => '2024-03-12',
            'description' => 'Beasiswa untuk konferensi teknik elektro internasional.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Siti Khadijah',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Masyarakat Desain Teknik',
            'host_country' => 'Kanada',
            'event_date_start' => '2024-04-05',
            'event_date_end' => '2024-04-07',
            'description' => 'Beasiswa untuk mengikuti expo desain mekanik.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRegistrant::create([
            'name' => 'Ahmad Zulkarnain',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Komunitas Pendidikan Indonesia',
            'host_country' => 'Indonesia',
            'event_date_start' => '2024-06-01',
            'event_date_end' => '2024-06-05',
            'description' => 'Beasiswa penuh untuk mahasiswa berprestasi di bidang akademik dan non-akademik.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRegistrant::create([
            'name' => 'Rina Suryani',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Institut Karir Unggul',
            'host_country' => 'Singapura',
            'event_date_start' => '2024-01-10',
            'event_date_end' => '2024-01-15',
            'description' => 'Beasiswa untuk pengembangan karir mahasiswa di bidang teknologi.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRegistrant::create([
            'name' => 'Dewi Anastasya',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Global Education Foundation',
            'host_country' => 'Amerika Serikat',
            'event_date_start' => '2024-03-01',
            'event_date_end' => '2024-03-05',
            'description' => 'Beasiswa penuh untuk mahasiswa internasional.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRegistrant::create([
            'name' => 'Budi Santoso',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Institut Teknologi Terapan',
            'host_country' => 'Singapura',
            'event_date_start' => '2024-04-15',
            'event_date_end' => '2024-04-17',
            'description' => 'Juara II pada Kompetisi Teknologi Terapan tingkat internasional.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRegistrant::create([
            'name' => 'Cindy Mutiara',  // Example student name
            'type' => 'Research Grant',
            'organizer' => 'International Research Institute',
            'host_country' => 'Jerman',
            'event_date_start' => '2024-04-10',
            'event_date_end' => '2024-04-12',
            'description' => 'Beasiswa untuk mahasiswa yang melakukan penelitian di bidang teknologi.',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);        

        // Scholarship Recipients
        ScholarshipRecipient::create([
            'name' => 'Ali Fauzi',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Asosiasi Pemrograman Indonesia',
            'host_country' => 'Indonesia',
            'event_date_start' => '2024-03-10',
            'event_date_end' => '2024-03-12',
            'description' => 'Juara I pada Kompetisi Pemrograman Nasional.',
            'proof_scan_url' => 'http://example.com/proof/kompetisi_pemrograman2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRecipient::create([
            'name' => 'Tari Salsabila',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'World Robotics Organization',
            'host_country' => 'USA',
            'event_date_start' => '2024-06-15',
            'event_date_end' => '2024-06-20',
            'description' => 'Juara III pada Kompetisi Robotika Internasional.',
            'proof_scan_url' => 'http://example.com/proof/robotics_challenge2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRecipient::create([
            'name' => 'Rina Yuliana',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Komunitas Film Mahasiswa',
            'host_country' => 'Indonesia',
            'event_date_start' => '2024-05-20',
            'event_date_end' => '2024-05-22',
            'description' => 'Juara I pada Festival Film Mahasiswa Regional.',
            'proof_scan_url' => 'http://example.com/proof/festival_film2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRecipient::create([
            'name' => 'James Bradley',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Komunitas Desain Grafis',
            'host_country' => 'Australia',
            'event_date_start' => '2024-08-10',
            'event_date_end' => '2024-08-12',
            'description' => 'Juara II pada Kompetisi Desain Grafis Internasional.',
            'proof_scan_url' => 'http://example.com/proof/desain_grafis2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        ScholarshipRecipient::create([
            'name' => 'Rina Puspita',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Komunitas Ilmuwan Muda',
            'host_country' => 'Malaysia',
            'event_date_start' => '2024-02-20',
            'event_date_end' => '2024-02-25',
            'description' => 'Juara II pada Lomba Penelitian Inovasi Teknologi.',
            'proof_scan_url' => 'http://example.com/proof/penelitian_inovasi2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRecipient::create([
            'name' => 'Dewi Sari',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'Yayasan Pendidikan Global',
            'host_country' => 'Amerika Serikat',
            'event_date_start' => '2024-01-05',
            'event_date_end' => '2024-01-10',
            'description' => 'Juara I pada Kompetisi Desain Grafis Internasional.',
            'proof_scan_url' => 'http://example.com/proof/desain_grafis2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRecipient::create([
            'name' => 'Budi Wibowo',  // Example student name
            'type' => 'Research Grant',
            'organizer' => 'Research and Innovation Foundation',
            'host_country' => 'Jepang',
            'event_date_start' => '2024-04-05',
            'event_date_end' => '2024-04-10',
            'description' => 'Beasiswa untuk peneliti di bidang kecerdasan buatan.',
            'proof_scan_url' => 'http://example.com/proof/penelitian_kecerdasan2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRecipient::create([
            'name' => 'Cindy Dwi',  // Example student name
            'type' => 'Partial Scholarship',
            'organizer' => 'Komunitas Peneliti Indonesia',
            'host_country' => 'Singapura',
            'event_date_start' => '2024-03-01',
            'event_date_end' => '2024-03-05',
            'description' => 'Juara II pada Kompetisi Penelitian Teknologi Terapan.',
            'proof_scan_url' => 'http://example.com/proof/kompetisi_penelitian2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
        ScholarshipRecipient::create([
            'name' => 'Hendra Wijaya',  // Example student name
            'type' => 'Full Scholarship',
            'organizer' => 'International Technology Education Foundation',
            'host_country' => 'Australia',
            'event_date_start' => '2024-05-15',
            'event_date_end' => '2024-05-20',
            'description' => 'Beasiswa untuk mahasiswa internasional dalam bidang teknologi.',
            'proof_scan_url' => 'http://example.com/proof/teknologi_internasional2024.pdf',
            'created_by' => 1,  // Adjust user ID as necessary
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        
    }
}
