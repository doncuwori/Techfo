import React from "react";
import Navbar from "@/Components/Navbar";
import { Clock4 } from "lucide-react";

const Profile = () => {
    return (
        <div>
            <Navbar />
            {/* Profile Section */}
            <main className="container mx-auto p-12 mb-12">
                <h2 className="text-xl font-semibold mb-4">Profil</h2>
                <div className="self-stretch h-[196px] py-2.5 flex-col justify-start items-start gap-2.5 flex">
                    <div className="self-stretch justify-center items-center gap-14 inline-flex">
                        <img
                            className="w-44 h-44 rounded-full"
                            src="/img/profile.png"
                            alt="Profile"
                        />
                        <div className="grow shrink basis-0 h-[165px] bg-white rounded-lg border border-[#d1d3d8] flex">
                            <div className="w-[179px] self-stretch px-4 bg-orange-100 rounded-tl-lg rounded-bl-lg flex-col justify-start items-start inline-flex">
                                {[
                                    "NIM",
                                    "Nama",
                                    "Program Studi",
                                    "Angkatan",
                                ].map((label) => (
                                    <div
                                        key={label}
                                        className="self-stretch py-3 flex items-center gap-2"
                                    >
                                        <div className="text-[#2d3036] text-sm font-semibold font-['Inter'] leading-tight">
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[500px] self-stretch px-4 flex-col justify-start items-start inline-flex">
                                {[
                                    "2110512020",
                                    "Khaliza Fania",
                                    "S1 Sistem Informasi",
                                    "2021",
                                ].map((value) => (
                                    <div
                                        key={value}
                                        className="self-stretch py-3 flex items-center gap-2"
                                    >
                                        <div className="text-[#2d3036] text-sm font-normal font-['Inter'] leading-tight">
                                            {value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Catatan Keaktifan */}
                <h2 className="text-xl font-semibold mb-6 mt-8">
                    Catatan Keaktifan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { label: "LOMBA", icon: "🏆", count: "36/50" },
                        { label: "BEASISWA", icon: "📝", count: "36/50" },
                        { label: "ABDIMAS", icon: "👥", count: "36/50" },
                        { label: "PENELITIAN", icon: "🔍", count: "36/50" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="bg-orange-100 border-2 border-neutral-200 rounded-lg p-6 flex items-center"
                        >
                            <div className="text-5xl">{item.icon}</div>
                            <div className="ml-16 text-center">
                                <p className="font-semibold">{item.label}</p>
                                <p className="text-[#2d3036] text-2xl font-medium leading-10">
                                    {item.count}
                                </p>
                                <p className="text-gray-600 text-xs">
                                    Daftar/Menang
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Riwayat Kegiatan */}
                <h2 className="text-xl font-semibold mb-4 mt-8">
                    Riwayat Kegiatan Penelitian dan Pengabdian Masyarakat
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((index) => (
                        <div
                            key={index}
                            className="h-[159px] px-3 py-4 bg-white shadow-md rounded-md border border-neutral-100 flex gap-2"
                        >
                            <div className="w-[125px] h-[127px] relative">
                                <img
                                    src="/img/logobem.png"
                                    alt="Deskripsi gambar"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                    {index === 2 ? "Penelitian" : "Abdimas"}
                                </div>
                            </div>
                            <div className="flex flex-col justify-start gap-2 w-[319px]">
                                <div className="text-black text-lg font-medium leading-7">
                                    INSPACE UI/UX
                                </div>
                                <div className="text-gray-500 text-sm font-normal leading-tight">
                                    Perlombaan UI/UX Design Nasional diadakan
                                    oleh Institut Teknologi Kalimantan
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock4
                                        size={18}
                                        className="text-orange-500"
                                    />
                                    <div className="text-orange-500 text-xs font-medium leading-tight">
                                        20 Sep 2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Profile;
