import React from "react";

const LaporanBeasiswa = () => {
    return (
        <body>
            <header class="w-full h-16 px-4 md:px-10 py-4 bg-white shadow-md flex items-center justify-between sticky top-0">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2 md:gap-4">
                        <div class="w-8 h-8 md:w-10 md:h-10 bg-[#fe632e] rounded-full flex items-center justify-center">
                            <span class="text-white text-lg md:text-2xl font-semibold"></span>
                        </div>
                        <div class="flex items-center gap-0.5">
                            <span class="text-gray-900 text-lg md:text-2xl font-semibold">
                                i
                            </span>
                            <span class="text-orange-500 text-lg md:text-2xl font-semibold">
                                Prestasi
                            </span>
                        </div>
                    </div>
                </div>
                <img
                    class="w-6 h-6 md:w-8 md:h-8 rounded-full ml-auto"
                    src="/img/profile.png"
                    alt="User Profile"
                />
                <p class="font-medium ml-2">
                    Badan Eksekutif Mahasiswa FIK UPNVJ
                </p>
            </header>

            <div class="fixed top-0 left-0 w-64 h-screen bg-white shadow-md p-4 mt-16">
                <ul>
                    <li class="mb-4">
                        <a href="#" class="text-gray-500 hover:text-orange-500">
                            Dashboard
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="text-gray-500 hover:text-orange-500">
                            Pendaftar Penelitian
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="text-gray-500 hover:text-orange-500">
                            Lolos Penelitian
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="text-gray-500 hover:text-orange-500">
                            Laporan
                        </a>
                    </li>
                </ul>
            </div>

            <div class="pl-64 w-full">
                <div class="container px-4 py-8 w-full">
                    <h1 class="text-3xl font-bold text-black mb-6">
                        Pusat Informasi
                    </h1>
                    <div class="flex flex-wrap -mx-4 mb-6">
                        <div class="w-full md:w-1/2 px-4">
                            <div class="bg-orange-100 rounded-lg border-2 border-neutral-100 p-4 flex items-center">
                                <div class="text-5xl ml-2 mr-6">🏆</div>
                                <div>
                                    <h2 class="text-xl font-semibold text-black mb-4">
                                        Penerima Beasiswa
                                    </h2>
                                    <div class="text-4xl font-bold text-black">
                                        135
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-4">
                            <div class="bg-orange-100 rounded-lg border-2 border-neutral-100 p-4 flex items-center">
                                <div class="text-5xl ml-2 mr-6">📄</div>
                                <div>
                                    <h2 class="text-xl font-semibold text-black mb-4">
                                        Pendaftar Beasiswa
                                    </h2>
                                    <div class="text-4xl font-bold text-black">
                                        135
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-lg mb-6">
                        <div class="flex items-center space-x-2 mb-4">
                            <button class="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                                Penerima
                            </button>
                            <button class="bg-white text-green-500 px-4 py-2 border border-green-500 rounded-md font-semibold">
                                Pendaftar
                            </button>
                        </div>
                        <div class="flex justify-between items-center relative w-full">
                            <div class="flex items-center justify-between mb-4">
                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        class="pl-10 py-2 rounded-lg border w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <svg
                                        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <button class="bg-white text-green-500 px-4 py-2 border border-green-500 rounded-md font-semibold">
                                    Filter
                                </button>
                                <button class="bg-green-500 text-white px-4 py-2 rounded-md font-semibold">
                                    <p>Unduh</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="min-w-full divide-y divide-gray-200 ">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        No
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        NIM
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nama
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Program Studi
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Angkatan
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nama Beasiswa
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Jenis Beasiswa
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Penyelenggara
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tempat Pelaksanaan
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Waktu Pelaksanaan
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Deskripsi Kegiatan
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Scan Bukti
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        3
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        4
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        5
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        6
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        7
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        8
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        9
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        10
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        11
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        12
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        13
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        15
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        1234567890
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        John Doe
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        {" "}
                                        S1 Teknik Informatika
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        2020
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Beasiswa Swasta
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        PT. Cipta Karya
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        14 Desember 2024
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        lorem ipsum
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-center">
                                        Bukti.png
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
        </body>
    );
};

export default LaporanBeasiswa;
