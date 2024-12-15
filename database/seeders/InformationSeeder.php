<?php

namespace Database\Seeders;

use App\Models\Competitions\CompetitionInformation;
use App\Models\Scholarships\ScholarshipInformation;
use App\Models\Abdimas\AbdimasInformation;
use App\Models\Researh\ResearchInformation;
use Illuminate\Database\Seeder;

class InformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data Competitions
        $competitionsData = [
            [
                'name' => 'Hackathon Inovasi Digital Nasional',
                'organizer' => 'Kementerian Komunikasi dan Informatika',
                'event_time_start' => now()->addMonths(2),
                'event_time_end' => now()->addMonths(2),
                'description' => 'Kompetisi pengembangan solusi teknologi digital untuk permasalahan nasional.',
                'activity_link' => 'https://www.kabarlomba.com/2024/12/gratis-kompetisi-menulis-nasional-forum.html',
                'guidebook_link' => 'https://drive.google.com/file/d/14rXaED2I8mNRPgkWslb8Bq9hY8wkJOwy/view',
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
                'activity_link' => 'https://example.com/kompetisi-arsitektur',
                'guidebook_link' => 'https://example.com/guidebook-arsitektur',
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
                'activity_link' => 'https://example.com/lomba-karya-tulis',
                'guidebook_link' => 'https://example.com/guidebook-karya-tulis',
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
                'activity_link' => 'https://example.com/kompetisi-wirausaha',
                'guidebook_link' => 'https://example.com/guidebook-wirausaha',
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
                'activity_link' => 'https://example.com/lomba-robotik',
                'guidebook_link' => 'https://example.com/guidebook-robotik',
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
                'activity_link' => 'https://example.com/kompetisi-film',
                'guidebook_link' => 'https://example.com/guidebook-film',
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
                'activity_link' => 'https://example.com/olimpiade-sains',
                'guidebook_link' => 'https://example.com/guidebook-sains',
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
                'activity_link' => 'https://example.com/kompetisi-desain',
                'guidebook_link' => 'https://example.com/guidebook-desain',
                'poster_url' => 'competitions/kompetisi-desain.jpg',
                'created_by' => 4,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ];

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

        $abdimasData = [
            [
                'name' => 'Seminar Kecerdasan Buatan',
                'location' => 'Ruang Seminar Lantai 3 Fakultas Teknik',
                'registration_start' => '2024-12-01',
                'registration_end' => '2024-12-10',
                'total_students_required' => 100,
                'lecturer_1' => 'Dr. Andi Wijaya',
                'lecturer_2' => 'Prof. Bella Kartika',
                'lecturer_3' => 'Dr. Clara Sutanto',
                'lecturer_4' => 'Prof. David Hartono',
                'lecturer_5' => 'Dr. Erwin Aditya',
                'description' => 'Seminar ini membahas penerapan kecerdasan buatan dalam kehidupan sehari-hari.'
            ],
            [
                'name' => 'Workshop Desain UI/UX',
                'location' => 'Lab Komputer 2 Gedung B',
                'registration_start' => '2024-11-20',
                'registration_end' => '2024-11-30',
                'total_students_required' => 40,
                'lecturer_1' => 'Dr. Fauzan Malik',
                'lecturer_2' => 'Prof. Gita Aryani',
                'lecturer_3' => 'Dr. Hana Surya',
                'lecturer_4' => 'Prof. Irfan Maulana',
                'lecturer_5' => 'Dr. Jelita Ramadhani',
                'description' => 'Pelatihan ini membantu mahasiswa memahami dasar-dasar desain antarmuka pengguna dan pengalaman pengguna.'
            ],
            [
                'name' => 'Pelatihan Analisis Data',
                'location' => 'Ruang Kelas 4.2 Gedung C',
                'registration_start' => '2024-12-05',
                'registration_end' => '2024-12-20',
                'total_students_required' => 30,
                'lecturer_1' => 'Dr. Kelvin Santoso',
                'lecturer_2' => 'Prof. Lestari Dewi',
                'lecturer_3' => 'Dr. Muhammad Arif',
                'lecturer_4' => 'Prof. Nadya Ismail',
                'lecturer_5' => 'Dr. Olivia Kartini',
                'description' => 'Pelatihan intensif ini akan mengajarkan teknik-teknik analisis data menggunakan tools modern.'
            ],
            [
                'name' => 'Simposium Teknologi Blockchain',
                'location' => 'Aula Universitas Gedung Pusat',
                'registration_start' => '2024-12-10',
                'registration_end' => '2024-12-25',
                'total_students_required' => 80,
                'lecturer_1' => 'Dr. Putra Pratama',
                'lecturer_2' => 'Prof. Qistina Hana',
                'lecturer_3' => 'Dr. Rahmat Satria',
                'lecturer_4' => 'Prof. Siti Nurhaliza',
                'lecturer_5' => 'Dr. Taufik Wijaya',
                'description' => 'Simposium ini berfokus pada pengenalan teknologi blockchain dan penerapannya di berbagai bidang.'
            ],
            [
                'name' => 'Kelas Intensif Pemrograman Python',
                'location' => 'Lab Komputer 3 Gedung D',
                'registration_start' => '2024-11-15',
                'registration_end' => '2024-11-25',
                'total_students_required' => 60,
                'lecturer_1' => 'Dr. Umar Hidayat',
                'lecturer_2' => 'Prof. Vera Wulandari',
                'lecturer_3' => 'Dr. Wahyu Anggara',
                'lecturer_4' => 'Prof. Yuli Astuti',
                'lecturer_5' => 'Dr. Zaki Fadillah',
                'description' => 'Kelas ini dirancang untuk mahasiswa yang ingin memperdalam pemrograman Python dari dasar hingga mahir.'
            ]
        ];

        $researchData = [
            [
                'name' => 'Penelitian Efisiensi Energi di Bangunan Perkotaan',
                'location' => 'Laboratorium Energi Gedung Teknik',
                'registration_start' => '2024-12-01',
                'registration_end' => '2024-12-10',
                'total_students_required' => 20,
                'lecturer_1' => 'Prof. Ahmad Yusran',
                'lecturer_2' => 'Dr. Budi Hermansyah',
                'lecturer_3' => 'Dr. Citra Anindya',
                'lecturer_4' => 'Prof. Diana Kartika',
                'lecturer_5' => 'Dr. Eka Purnama',
                'description' => 'Penelitian ini bertujuan untuk mengembangkan metode efisiensi energi di bangunan berbasis teknologi ramah lingkungan.'
            ],
            [
                'name' => 'Kajian Pemanfaatan AI dalam Diagnosa Medis',
                'location' => 'Ruang Seminar Kesehatan Lantai 2',
                'registration_start' => '2024-11-20',
                'registration_end' => '2024-12-05',
                'total_students_required' => 25,
                'lecturer_1' => 'Dr. Faisal Anwar',
                'lecturer_2' => 'Prof. Gita Harman',
                'lecturer_3' => 'Dr. Hendra Setiawan',
                'lecturer_4' => 'Prof. Iman Nurhadi',
                'lecturer_5' => 'Dr. Joko Prasetyo',
                'description' => 'Penelitian ini akan mengeksplorasi peran kecerdasan buatan dalam mendukung diagnosa medis yang lebih akurat.'
            ],
            [
                'name' => 'Studi Pengaruh Teknologi Blockchain dalam Logistik',
                'location' => 'Ruang Konferensi Gedung Ekonomi',
                'registration_start' => '2024-12-01',
                'registration_end' => '2024-12-15',
                'total_students_required' => 30,
                'lecturer_1' => 'Prof. Kurniawan Satria',
                'lecturer_2' => 'Dr. Lestari Wibowo',
                'lecturer_3' => 'Dr. Muhammad Arifin',
                'lecturer_4' => 'Prof. Nina Kurniawati',
                'lecturer_5' => 'Dr. Oki Iskandar',
                'description' => 'Penelitian ini mempelajari bagaimana teknologi blockchain dapat meningkatkan efisiensi dalam rantai pasok logistik.'
            ],
            [
                'name' => 'Pengembangan Algoritma Pembelajaran Mesin untuk Prediksi Cuaca',
                'location' => 'Lab Komputer AI Gedung Informatika',
                'registration_start' => '2024-12-05',
                'registration_end' => '2024-12-20',
                'total_students_required' => 15,
                'lecturer_1' => 'Dr. Putri Rahmawati',
                'lecturer_2' => 'Prof. Qodratul Hasan',
                'lecturer_3' => 'Dr. Ratna Dewi',
                'lecturer_4' => 'Prof. Sulaiman Prasetyo',
                'lecturer_5' => 'Dr. Tania Wulandari',
                'description' => 'Penelitian ini bertujuan untuk mengembangkan algoritma pembelajaran mesin yang dapat memprediksi pola cuaca secara akurat.'
            ],
            [
                'name' => 'Analisis Dampak Sosial dari Implementasi Smart City',
                'location' => 'Auditorium Gedung Pemerintahan',
                'registration_start' => '2024-12-10',
                'registration_end' => '2024-12-30',
                'total_students_required' => 50,
                'lecturer_1' => 'Prof. Umar Hidayat',
                'lecturer_2' => 'Dr. Vina Melati',
                'lecturer_3' => 'Dr. Wahyu Permadi',
                'lecturer_4' => 'Prof. Yuliana Saraswati',
                'lecturer_5' => 'Dr. Zulkifli Hakim',
                'description' => 'Penelitian ini akan mengevaluasi dampak sosial yang dihasilkan dari penerapan konsep kota pintar di beberapa wilayah.'
            ]
        ];


        // Insert data to database
        CompetitionInformation::insert($competitionsData);
        ScholarshipInformation::insert($scholarshipsData);
        AbdimasInformation::insert($abdimasData);
        ResearchInformation::insert($researchData);
    }
}
