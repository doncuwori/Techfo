import React from 'react'

const PusatInformasiAbdimas = () => {
  return (
    <body>
    <header class="w-full h-16 px-4 md:px-10 py-4 bg-white shadow-md flex items-center justify-between sticky top-0">
        <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 md:gap-4">
                <div class="w-8 h-8 md:w-10 md:h-10 bg-[#fe632e] rounded-full flex items-center justify-center">
                    <span class="text-white text-lg md:text-2xl font-semibold"></span>
                </div>
                <div class="flex items-center gap-0.5">
                    <span class="text-gray-900 text-lg md:text-2xl font-semibold">i</span>
                    <span class="text-orange-500 text-lg md:text-2xl font-semibold">Prestasi</span>
                </div>
            </div>
        </div>
        <img class="w-6 h-6 md:w-8 md:h-8 rounded-full ml-auto" src="/img/profile.png" alt="User Profile" />
        <p class="font-medium ml-2">Badan Eksekutif Mahasiswa FIK UPNVJ</p>
    </header>

    <div class="fixed top-0 left-0 w-64 h-screen bg-white shadow-md p-4 mt-16">
        <ul>
            <li class="mb-4">
                <a href="#" class="text-gray-500 hover:text-orange-500">Dashboard</a>
            </li>
            <li class="mb-4">
                <a href="#" class="text-gray-500 hover:text-orange-500">Pendaftar Penelitian</a>
            </li>
            <li class="mb-4">
                <a href="#" class="text-gray-500 hover:text-orange-500">Lolos Penelitian</a>
            </li>
            <li class="mb-4">
                <a href="#" class="text-gray-500 hover:text-orange-500">Laporan</a>
            </li>
        </ul>
    </div>

    <div class="pl-64 w-full">
        <div class="container px-4 py-8 w-full">
            <h1 class="text-3xl font-bold text-black">Pusat Informasi</h1>
        </div>
        <div class="flex-1 p-6">
            <div class="bg-white shadow-md rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-4">Optimalisasi Aplikasi E-Commerce sebagai Upaya untuk Meningkatkan
                    Promosi Batik Paoman</h3>
                <div class="text-gray-600 mb-4">
                    <p><strong>Lokasi Kegiatan:</strong> Desa Pabean Udik, Indramayu, Indonesia</p>
                    <p><strong>Batas Pendaftaran:</strong> <span class="text-red-500">1 Juni 2024 - 31 Juni 2024</span>
                    </p>
                </div>

                <div class="mt-4">
                    <p><strong>Total Mahasiswa yang Dibutuhkan:</strong></p>
                    <p>4 orang mahasiswa</p>
                </div>
                <div class="mt-4">
                    <p><strong>Total Mahasiswa yang Dibutuhkan:</strong></p>
                    <p>4 orang mahasiswa</p>
                </div>

                <div class="mt-4">
                    <p><strong>Anggota Tim:</strong></p>
                    <ul class="list-disc ml-5">
                        <li>Eriy Krisnanik S.Kom, M.M.</li>
                        <li>Ika Nurilali, S.Kom, M.Sc.</li>
                    </ul>
                </div>
                <div class="mt-4">
                    <p><strong>Detail Kegiatan:</strong></p>
                    <p>Pada kegiatan pengabdian masyarakat ini, mahasiswa akan turut serta membantu membimbing dan
                        mengarahkan masyarakat Desa Pabean Udik, Indramayu dalam menggunakan aplikasi E-Commerce...</p>
                </div>
                <div class="flex justify-end mt-4">
                    <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">+ Surat Tugas</button>
                </div>
            </div>

            <div class="mt-6 bg-white shadow-md rounded-lg p-6">
                <div class="flex justify-between items-center">
                    <h3 class="text-xl font-semibold">Pendaftar Pengabdian Masyarakat</h3>
                    <div class="flex items-center">
                        <span class="mr-2 text-center">Masih merekrut?</span>
                        <input type="checkbox" name="toggle button" />
                    </div>
                </div>
                
                <div class="overflow-x-auto mt-4">
                    <table class="min-w-full divide-y divide-gray-200 ">
                        <thead>
                            <tr>
                                <th
                                    class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    No</th>
                                <th
                                    class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Nama Pendaftar</th>
                                <th
                                    class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status</th>
                                <th
                                    class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Penerimaan</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr>
                                <td class="py-2 text-center">1</td>
                                <td class="py-2 text-center">Pendaftar 1</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">2</td>
                                <td class="py-2 text-center">Pendaftar 2</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">3</td>
                                <td class="py-2 text-center">Pendaftar 3</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">4</td>
                                <td class="py-2 text-center">Pendaftar 4</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">5</td>
                                <td class="py-2 text-center">Pendaftar 5</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">6</td>
                                <td class="py-2 text-center">Pendaftar 6</td>
                                <td class="py-2 text-center">Diterima</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">7</td>
                                <td class="py-2 text-center">Pendaftar 7</td>
                                <td class="py-2 text-center">Ditolak</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">8</td>
                                <td class="py-2 text-center">Pendaftar 8</td>
                                <td class="py-2 text-center">Ditolak</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">9</td>
                                <td class="py-2 text-center">Pendaftar 9</td>
                                <td class="py-2 text-center">Ditolak</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                            <tr>
                                <td class="py-2 text-center">10</td>
                                <td class="py-2 text-center">Pendaftar 10</td>
                                <td class="py-2 text-center">Ditolak</td>
                                <td class="py-2 text-center">
                                    <input type="checkbox" name="penerimaan" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <p class="text-gray-500">Rows per page: 10</p>
                    <div class="flex space-x-2 items-center">
                        <button class="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">Prev</button>
                        <p class="text-gray-500">1</p>
                        <p class="text-gray-500">...</p>
                        <button class="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">Next</button>
                    </div>
                    <p class="text-gray-500">Total 1 - 10 of 130</p>
                </div>
            </div>
        </div>
    </div>
</body>
  )
}

export default PusatInformasiAbdimas