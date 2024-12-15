<?php

namespace Database\Seeders;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Hash;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $angkatan = [
            '2020',
            '2021',
            '2022',
            '2023',
        ];


        foreach ($angkatan as $key => $value) {
            $call = new Client();

            $response = $call->request('POST', Env::get('UPNVJ_API') . '/list_mahasiswa', [
                    'headers'=>[
                        'API_KEY_NAME' => Env::get('API_KEY_NAME'),
                        'API_KEY_SECRET' => Env::get('API_KEY_SECRET'),
                    ],
                    'auth' => [Env::get('UPNVJ_API_USER'), Env::get('UPNVJ_API_PASS')],
                    'form_params' => [
                        'angkatan' => $value
                    ],
                ]);

            $stream = $response->getbody();
            $content = '';
            while (!$stream->eof()) {
                $content .= $stream->read(1024);
            }
            
            $result = json_decode($content, true)['data'];

            foreach ($result as $key => $value) {
                if (
                    $value['kode_program_studi'] == 501 ||
                    $value['kode_program_studi'] == 512 ||
                    $value['kode_program_studi'] == 511
                ) {

                    $exist = User::where('nim', $value['nim'])->first();

                    if ($exist) {
                        continue;
                    }

                    User::create([
                        'name' => $value['nama_mahasiswa'],
                        'nim' => $value['nim'],
                        'prodi' =>  $value['nama_program_studi'],
                        'angkatan' => $value['tahun_angkatan'],
                        'email' => $value['nim'] . '@mahasiswa.upnvj.ac.id',
                        'role' => 'user',
                        'password' => Hash::make($value['nim']),
                    ]);
                }
            }
        }
    }
}
