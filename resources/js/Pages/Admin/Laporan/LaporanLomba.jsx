import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import NavbarAdmin from "@/Components/NavbarAdmin";
import TabelTabPrestasi from "@/Components/Admin/Laporan/Lomba/TabelTabPrestasi";
import TabelTabPartisipasi from "@/Components/Admin/Laporan/Lomba/TabelTabPartisipasi";
import React, { useState } from "react";

const LaporanLomba = () => {
    const value = 0.3;
    const [tabValue, settabValue] = useState("Prestasi");
    return (
        <body>
            <NavbarAdmin />
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
                                            maxValue={1}
                                            text={`${value * 100}%`}
                                        />
                                    </div>
                                </div>
                                <div class="flex-col justify-center items-center gap-1 inline-flex">
                                    <div class="text-center text-[#2d3036] text-lg font-medium leading-7 ml-8">
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
                                    <div class="text-4xl font-bold text-black">
                                        135
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
                                    <div class="text-4xl font-bold text-black">
                                        135
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="self-stretch h-[360px] p-6 bg-white rounded-lg border-2 border-neutral-100 flex-col justify-start items-start gap-8 flex">
                        <div class="justify-start items-start gap-3 inline-flex">
                            <div class="text-[#2d3036] text-xl font-medium leading-7">
                                REKAP JUARA
                            </div>
                        </div>
                        <div class="self-stretch justify-start items-end gap-6 inline-flex">
                            <div class="w-[19px] pb-9 flex-col justify-start items-center gap-[31px] inline-flex">
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
                                    25
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
                                    20
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
                                    15
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
                                    10
                                </div>
                                <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
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
                                    <div class="self-stretch text-center text-gray-500 text-sm font-normal leading-tight">
                                        Lainnya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-lg shadow-lg mt-6 mb-6 border-2 border-neutral-100">
                        <div class="flex items-center mb-4">
                            <button
                                onClick={() => {
                                    settabValue("Prestasi");
                                }}
                                className={`${
                                    tabValue === "Prestasi"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                } py-1.5 px-2 w-[140px] rounded-l-md duration-300`}
                            >
                                Prestasi
                            </button>
                            <button
                                onClick={() => {
                                    settabValue("Partisipasi");
                                }}
                                className={`${
                                    tabValue === "Partisipasi"
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                } py-1.5 px-2 w-[140px] rounded-r-md duration-300`}
                            >
                                Partisipasi
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
                                <button class="bg-white text-green-500 px-4 py-1 border border-green-500 rounded-md font-semibold">
                                    Filter
                                </button>
                                <button class="bg-green-500 text-white px-4 py-1 rounded-md font-semibold">
                                    <p>Unduh</p>
                                </button>
                            </div>
                        </div>
                        <div class="overflow-x-auto">
                            {tabValue == "Prestasi" ? (
                                <TabelTabPrestasi />
                            ) : (
                                <TabelTabPartisipasi />
                            )}
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

export default LaporanLomba;
