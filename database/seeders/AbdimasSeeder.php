<?php

namespace Database\Seeders;

use App\Models\Abdimas\AbdimasRecipient;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class AbdimasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AbdimasRecipient::create([
            'name' => 'Rudi Pratama',
            'telephone' => '081234567890',
            'organizer' => 'Komunitas Teknologi',
            'khs' => 'http://example.com/khs/rudi_pratama_khs.pdf',
            'cv' => 'http://example.com/cv/rudi_pratama_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/rudi_pratama_portofolio.pdf',
            'foto' => 'http://example.com/foto/rudi_pratama.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Lia Suryani',
            'telephone' => '085676543210',
            'organizer' => 'Yayasan Pendidikan Mandiri',
            'khs' => 'http://example.com/khs/lia_suryani_khs.pdf',
            'cv' => 'http://example.com/cv/lia_suryani_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/lia_suryani_portofolio.pdf',
            'foto' => 'http://example.com/foto/lia_suryani.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Tio Aditya',
            'telephone' => '082345678901',
            'organizer' => 'Komunitas Mahasiswa Ilmuwan',
            'khs' => 'http://example.com/khs/tio_aditya_khs.pdf',
            'cv' => 'http://example.com/cv/tio_aditya_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/tio_aditya_portofolio.pdf',
            'foto' => 'http://example.com/foto/tio_aditya.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Feni Kurniawati',
            'telephone' => '087654321234',
            'organizer' => 'Yayasan Pengembangan Sosial',
            'khs' => 'http://example.com/khs/feni_kurniawati_khs.pdf',
            'cv' => 'http://example.com/cv/feni_kurniawati_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/feni_kurniawati_portofolio.pdf',
            'foto' => 'http://example.com/foto/feni_kurniawati.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Eka Rizky',
            'telephone' => '089876543210',
            'organizer' => 'Komunitas Pencipta Inovasi',
            'khs' => 'http://example.com/khs/eka_rizky_khs.pdf',
            'cv' => 'http://example.com/cv/eka_rizky_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/eka_rizky_portofolio.pdf',
            'foto' => 'http://example.com/foto/eka_rizky.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Yulia Aulia',
            'telephone' => '087634567890',
            'organizer' => 'Asosiasi Mahasiswa Kreatif',
            'khs' => 'http://example.com/khs/yulia_aulia_khs.pdf',
            'cv' => 'http://example.com/cv/yulia_aulia_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/yulia_aulia_portofolio.pdf',
            'foto' => 'http://example.com/foto/yulia_aulia.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Budi Santoso',
            'telephone' => '085432109876',
            'organizer' => 'Yayasan Teknologi Pendidikan',
            'khs' => 'http://example.com/khs/budi_santoso_khs.pdf',
            'cv' => 'http://example.com/cv/budi_santoso_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/budi_santoso_portofolio.pdf',
            'foto' => 'http://example.com/foto/budi_santoso.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Dina Rahayu',
            'telephone' => '083245678901',
            'organizer' => 'Komunitas Pembelajar Muda',
            'khs' => 'http://example.com/khs/dina_rahayu_khs.pdf',
            'cv' => 'http://example.com/cv/dina_rahayu_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/dina_rahayu_portofolio.pdf',
            'foto' => 'http://example.com/foto/dina_rahayu.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Wawan Subagio',
            'telephone' => '081567890123',
            'organizer' => 'Komunitas Teknologi Berkelanjutan',
            'khs' => 'http://example.com/khs/wawan_subagio_khs.pdf',
            'cv' => 'http://example.com/cv/wawan_subagio_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/wawan_subagio_portofolio.pdf',
            'foto' => 'http://example.com/foto/wawan_subagio.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Maya Septiani',
            'telephone' => '082345678901',
            'organizer' => 'Asosiasi Peneliti Indonesia',
            'khs' => 'http://example.com/khs/maya_septiani_khs.pdf',
            'cv' => 'http://example.com/cv/maya_septiani_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/maya_septiani_portofolio.pdf',
            'foto' => 'http://example.com/foto/maya_septiani.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Rika Novita',
            'telephone' => '081234567890',
            'organizer' => 'Yayasan Kreativitas Indonesia',
            'khs' => 'http://example.com/khs/rika_novita_khs.pdf',
            'cv' => 'http://example.com/cv/rika_novita_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/rika_novita_portofolio.pdf',
            'foto' => 'http://example.com/foto/rika_novita.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Fahri Ramadhan',
            'telephone' => '084567890123',
            'organizer' => 'Komunitas Pembina Anak Bangsa',
            'khs' => 'http://example.com/khs/fahri_ramadhan_khs.pdf',
            'cv' => 'http://example.com/cv/fahri_ramadhan_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/fahri_ramadhan_portofolio.pdf',
            'foto' => 'http://example.com/foto/fahri_ramadhan.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Kiki Setiawan',
            'telephone' => '085678901234',
            'organizer' => 'Yayasan Inovasi Teknologi',
            'khs' => 'http://example.com/khs/kiki_setiawan_khs.pdf',
            'cv' => 'http://example.com/cv/kiki_setiawan_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/kiki_setiawan_portofolio.pdf',
            'foto' => 'http://example.com/foto/kiki_setiawan.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Zainab Alvi',
            'telephone' => '082345678901',
            'organizer' => 'Asosiasi Pembangunan Sosial',
            'khs' => 'http://example.com/khs/zainab_alvi_khs.pdf',
            'cv' => 'http://example.com/cv/zainab_alvi_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/zainab_alvi_portofolio.pdf',
            'foto' => 'http://example.com/foto/zainab_alvi.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        AbdimasRecipient::create([
            'name' => 'Wira Prasetya',
            'telephone' => '087654321234',
            'organizer' => 'Komunitas Pengembangan Kreatif',
            'khs' => 'http://example.com/khs/wira_prasetya_khs.pdf',
            'cv' => 'http://example.com/cv/wira_prasetya_cv.pdf',
            'portofolio' => 'http://example.com/portofolio/wira_prasetya_portofolio.pdf',
            'foto' => 'http://example.com/foto/wira_prasetya.jpg',
            'created_by' => 1,  // Assuming user ID 1 (admin)
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
