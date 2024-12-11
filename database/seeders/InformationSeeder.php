<?php

namespace Database\Seeders;

use App\Models\Competitions\CompetitionInformation;
use App\Models\Scholarships\ScholarshipInformation;
use Illuminate\Database\Seeder;

class InformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $scholarshipsData = [
            [
                'name' => 'Beasiswa Prestasi Akademik Nasional',
                'organizer' => 'Kementerian Pendidikan dan Kebudayaan',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(3),
                'description' => 'Beasiswa untuk mahasiswa berprestasi dengan kriteria akademik tinggi dan berasal dari keluarga kurang mampu.',
                'poster_url' => 'scholarships/beasiswa-prestasi.jpg',
                'created_by' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Riset Inovasi Teknologi',
                'organizer' => 'Kementerian Riset dan Teknologi',
                'event_time_start' => now()->addMonths(3),
                'event_time_end' => now()->addMonths(4),
                'description' => 'Program beasiswa untuk mahasiswa yang memiliki inovasi teknologi dan penelitian berkualitas.',
                'poster_url' => 'scholarships/beasiswa-riset.jpg',
                'created_by' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Kepemimpinan Muda',
                'organizer' => 'Yayasan Pemuda Inspiratif',
                'event_time_start' => now()->addMonths(4),
                'event_time_end' => now()->addMonths(5),
                'description' => 'Beasiswa untuk mahasiswa yang memiliki potensi kepemimpinan dan kontribusi sosial.',
                'poster_url' => 'scholarships/beasiswa-kepemimpinan.jpg',
                'created_by' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Wirausaha Muda',
                'organizer' => 'Kementerian Koperasi dan UKM',
                'event_time_start' => now()->addMonths(5),
                'event_time_end' => now()->addMonths(6),
                'description' => 'Dukungan beasiswa untuk mahasiswa yang memiliki ide bisnis inovatif dan potensi kewirausahaan.',
                'poster_url' => 'scholarships/beasiswa-wirausaha.jpg',
                'created_by' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Internasional ASEAN',
                'organizer' => 'Sekretariat ASEAN',
                'event_time_start' => now()->addMonths(6),
                'event_time_end' => now()->addMonths(7),
                'description' => 'Program beasiswa pertukaran untuk mahasiswa dari negara-negara anggota ASEAN.',
                'poster_url' => 'scholarships/beasiswa-asean.jpg',
                'created_by' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Peduli Lingkungan',
                'organizer' => 'Kementerian Lingkungan Hidup',
                'event_time_start' => now()->addMonths(7),
                'event_time_end' => now()->addMonths(8),
                'description' => 'Beasiswa untuk mahasiswa yang memiliki kontribusi nyata dalam pelestarian lingkungan.',
                'poster_url' => 'scholarships/beasiswa-lingkungan.jpg',
                'created_by' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Penelitian Kesehatan',
                'organizer' => 'Kementerian Kesehatan',
                'event_time_start' => now()->addMonths(8),
                'event_time_end' => now()->addMonths(9),
                'description' => 'Program beasiswa untuk mahasiswa kedokteran dan kesehatan yang berprestasi.',
                'poster_url' => 'scholarships/beasiswa-kesehatan.jpg',
                'created_by' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Beasiswa Pengembangan Seni dan Budaya',
                'organizer' => 'Kementerian Pendidikan Kebudayaan',
                'event_time_start' => now()->addMonths(9),
                'event_time_end' => now()->addMonths(10),
                'description' => 'Beasiswa untuk mahasiswa yang memiliki talenta di bidang seni dan pelestarian budaya.',
                'poster_url' => 'scholarships/beasiswa-seni.jpg',
                'created_by' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

        // Data Competitions
        $competitionsData = [
            [
                'name' => 'Hackathon Inovasi Digital Nasional',
                'organizer' => 'Kementerian Komunikasi dan Informatika',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(2),
                'description' => 'Kompetisi pengembangan solusi teknologi digital untuk permasalahan nasional.',
                'poster_url' => 'competitions/hackathon-digital.jpg',
                'created_by' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Kompetisi Desain Arsitektur Berkelanjutan',
                'organizer' => 'Ikatan Arsitek Indonesia',
                'event_time_start' => now()->addMonths(3),
                'event_time_end' => now()->addMonths(4),
                'description' => 'Kompetisi desain arsitektur dengan konsep ramah lingkungan dan berkelanjutan.',
                'poster_url' => 'competitions/kompetisi-arsitektur.jpg',
                'created_by' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lomba Karya Tulis Ilmiah Nasional',
                'organizer' => 'Asosiasi Perguruan Tinggi',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(5),
                'description' => 'Kompetisi penulisan karya ilmiah untuk mahasiswa se-Indonesia.',
                'poster_url' => 'competitions/lomba-karya-tulis.jpg',
                'created_by' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Kompetisi Kewirausahaan Sosial',
                'organizer' => 'Yayasan Pengembangan Wirausaha',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(3),
                'description' => 'Ajang kompetisi untuk mahasiswa dengan ide bisnis sosial yang inovatif.',
                'poster_url' => 'competitions/kompetisi-wirausaha.jpg',
                'created_by' => 2,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Lomba Robotic dan Kecerdasan Buatan',
                'organizer' => 'Asosiasi Robotik Indonesia',
                'event_time_start' => now()->addMonths(1),
                'event_time_end' => now()->addMonths(2),
                'description' => 'Kompetisi pengembangan robot dan aplikasi kecerdasan buatan.',
                'poster_url' => 'competitions/lomba-robotik.jpg',
                'created_by' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Kompetisi Film Dokumenter Lingkungan',
                'organizer' => 'Dewan Kesenian Lingkungan',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(3),
                'description' => 'Kompetisi pembuatan film dokumenter bertema pelestarian lingkungan.',
                'poster_url' => 'competitions/kompetisi-film.jpg',
                'created_by' => 3,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Olimpiade Sains Nasional',
                'organizer' => 'Kementerian Pendidikan',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(4),
                'description' => 'Kompetisi sains tingkat nasional untuk mahasiswa dari berbagai bidang ilmu.',
                'poster_url' => 'competitions/olimpiade-sains.jpg',
                'created_by' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Kompetisi Desain Produk Inovatif',
                'organizer' => 'Kementerian Perindustrian',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(5),
                'description' => 'Kompetisi desain produk dengan fokus inovasi dan kebermanfaatan.',
                'poster_url' => 'competitions/kompetisi-desain.jpg',
                'created_by' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];


        // Insert data to database
        ScholarshipInformation::insert($scholarshipsData);
        CompetitionInformation::insert($competitionsData);
    }
}
