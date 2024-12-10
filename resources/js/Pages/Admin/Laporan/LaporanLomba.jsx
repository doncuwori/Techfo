import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import NavbarAdmin from "@/Components/NavbarAdmin";

const LaporanLomba = ({
    competitionWinnersCount,
    competitionRegistrantsCount,
    user
}) => {
    console.log(competitionWinnersCount, competitionRegistrantsCount);

    const maxValue = 365;  
    const value = Math.min(competitionWinnersCount, maxValue);  
    const percentage = (value / maxValue) * 100; 

    return (
        <body>
            <NavbarAdmin user={user}/>
            <div class="pl-72 w-full">
                <div class="container px-4 py-8 w-full">
                    <h1 class="text-3xl font-bold text-black mb-6">
                        Pusat Informasi
                    </h1>
                    <div class="flex flex-wrap -mx-4 mb-6">
                        <div class="w-full md:w-1/3 px-4">
                            <div class="bg-white rounded-lg border-2 border-neutral-100 p-4 flex items-center">
                                <div class="w-[87px] h-[87px] relative">
                                    <div class="absolute">
                                        <CircularProgressbar
                                            className="h-24 w-24"
                                            value={value}
                                            maxValue={maxValue}
                                            text={`${percentage.toFixed(2)}%`}
                                        />
                                    </div>
                                </div>
                                <div class="flex-col justify-center items-center gap-1 inline-flex">
                                    <div class="text-center text-[#2d3036] text-lg font-semibold leading-7 ml-8">
                                        Prestasi Mahasiswa
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4">
                            <div class="bg-orange-100 rounded-lg border-2 border-neutral-100 p-4 flex items-center">
                                <div class="text-5xl ml-2 mr-6">🏆</div>
                                <div>
                                    <h2 class="text-xl font-semibold text-black mb-4">
                                        Pemenang Lomba
                                    </h2>
                                    <div className="text-4xl font-bold text-black">
                                        {`${competitionWinnersCount}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 px-4">
                            <div class="bg-orange-100 rounded-lg border-2 border-neutral-100 p-4 flex items-center">
                                <div class="text-5xl ml-2 mr-6">📄</div>
                                <div>
                                    <h2 class="text-xl font-semibold text-black mb-4">
                                        Partisipan Lomba
                                    </h2>
                                    <div className="text-4xl font-bold text-black">
                                        {`${competitionRegistrantsCount}`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="self-stretch h-[360px] p-6 bg-white rounded-lg border-2 border-neutral-100 flex-col justify-start items-start gap-8 flex">
                        <div class="justify-start items-start gap-3 inline-flex">
                            <div class="text-[#2d3036] text-xl font-semibold leading-7">
                                REKAP JUARA
                            </div>
                        </div>
                        <div class="self-stretch justify-start items-end gap-6 inline-flex">
                            <div class="w-[19px] pb-9 flex-col justify-start items-center gap-[31px] inline-flex">
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                    25
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                    20
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                    15
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                    10
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                    5
                                </div>
                            </div>
                            <div class="grow shrink basis-0 h-[185px] justify-center items-end gap-[39px] flex">
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara 1
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara 2
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara 3
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara Umum
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara Favorit
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Juara Harapan
                                    </div>
                                </div>
                                <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
                                    <div class="self-stretch justify-center items-end gap-[5px] inline-flex">
                                        <div class="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                        <div class="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                        <div class="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                        <div class="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                    </div>
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                                        Lainnya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-lg mt-6 mb-6 border-2 border-neutral-100">
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
                                            Delegasi Ormawa
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Dosen Pembimbing/Pendamping
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Bidang
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Penyelenggara
                                        </th>
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Negara Penyelenggara
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
                                        <th class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Foto Kegiatan
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
                                        </td>{" "}
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
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
                                            KSM Android
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Erly Krisnanik S.Kom., MM.
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            UI/UX Designer
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            PT. Cipta Karya
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Indonesia
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
                                        <td class="px-6 py-4 whitespace-nowrap text-center">
                                            Kegiatan.png
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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

export default LaporanLomba;
