import NavbarAdmin from "@/Components/NavbarAdmin";
import React from "react";

const PusatInformasiPenelitian = () => {
    return (
        <body>
            <NavbarAdmin />
            <div class="pl-72 w-full">
                <div class="container px-4 py-8 w-full">
                    <h1 class="text-3xl font-bold text-black">
                        Pusat Informasi
                    </h1>
                </div>
                <div class="flex-1 p-6">
                    <div class="bg-white shadow-md rounded-lg p-6">
                        <h3 class="text-xl font-semibold mb-4">
                            Optimalisasi Aplikasi E-Commerce sebagai Upaya untuk
                            Meningkatkan Promosi Batik Paoman
                        </h3>
                        <div class=" mb-4">
                            <p>
                                <strong>Lokasi Kegiatan:</strong> Desa Pabean
                                Udik, Indramayu, Indonesia
                            </p>
                            <div class="mt-4">
                                <p>
                                    <strong>Batas Pendaftaran:</strong>{" "}
                                    <span class="text-red-500">
                                        1 Juni 2024 - 31 Juni 2024
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div class="mt-4">
                            <p>
                                <strong>
                                    Total Mahasiswa yang Dibutuhkan:
                                </strong>
                            </p>
                            <p>4 orang mahasiswa</p>
                        </div>
                        <div class="mt-4">
                            <p>
                                <strong>
                                    Total Mahasiswa yang Dibutuhkan:
                                </strong>
                            </p>
                            <p>4 orang mahasiswa</p>
                        </div>

                        <div class="mt-4">
                            <p>
                                <strong>Anggota Tim:</strong>
                            </p>
                            <ul class="list-disc ml-5">
                                <li>Eriy Krisnanik S.Kom, M.M.</li>
                                <li>Ika Nurilali, S.Kom, M.Sc.</li>
                            </ul>
                        </div>
                        <div class="mt-4">
                            <p>
                                <strong>Detail Kegiatan:</strong>
                            </p>
                            <p>
                                Pada kegiatan penelitian ini, mahasiswa akan
                                turut serta membantu para dosen dalam melakukan
                                risetnya di Desa Pabean Udik, Indramayu dalam
                                menggunakan aplikasi E-Commerce...
                            </p>
                        </div>
                        <div class="flex justify-end mt-4">
                            <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                + Surat Tugas
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 bg-white shadow-md rounded-lg p-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-xl font-semibold">
                                Pendaftar Penelitian
                            </h3>
                            <div>
                                <span class="ml-3 text-gray-700 text-center text-12 mr-4">
                                    Masih merekrut ?
                                </span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        class="sr-only peer"
                                    />
                                    <div class="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-colors"></div>
                                    <div class="absolute top-1 left-1 w-4 h-4 bg-white border rounded-full transition-transform peer-checked:translate-x-5"></div>
                                </label>
                            </div>
                        </div>

                        <div class="overflow-x-auto mt-4">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <thead>
                                    <tr>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            No
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama Pendaftar
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Penerimaan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="py-2 text-center">1</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 1
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">2</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 2
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">3</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 3
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">4</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 4
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">5</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 5
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">6</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 6
                                        </td>
                                        <td class="py-2 text-center">
                                            Diterima
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">7</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 7
                                        </td>
                                        <td class="py-2 text-center">
                                            Ditolak
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">8</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 8
                                        </td>
                                        <td class="py-2 text-center">
                                            Ditolak
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">9</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 9
                                        </td>
                                        <td class="py-2 text-center">
                                            Ditolak
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="py-2 text-center">10</td>
                                        <td class="py-2 text-center">
                                            Pendaftar 10
                                        </td>
                                        <td class="py-2 text-center">
                                            Ditolak
                                        </td>
                                        <td class="py-2 text-center">
                                            <input
                                                type="checkbox"
                                                name="penerimaan"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <p class="text-gray-500">Rows per page: 10</p>
                            <div class="flex space-x-2 items-center">
                                <button class="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">
                                    Prev
                                </button>
                                <p class="text-gray-500">1</p>
                                <p class="text-gray-500">...</p>
                                <button class="px-3 py-1 bg-gray-300 text-gray-700 rounded-md">
                                    Next
                                </button>
                            </div>
                            <p class="text-gray-500">Total 1 - 10 of 130</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default PusatInformasiPenelitian;
