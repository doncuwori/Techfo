
import React, { useState } from "react";
import { BiodataUser } from "@/components/BiodataUser";
import { TabPrestasiLomba } from "@/Components/PendataanLomba/TabPrestasiLomba";
import { TabPartisipasiLomba } from "@/Components/PendataanLomba/TabPartisipasiLomba";

const PendataanBeasiswa = () => {
    const [tabValue, settabValue] = useState("Partisipasi");
    return (
        <div className="min-h-screen flex flex-col items-center">
            <header className="w-full bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="flex items-center">
                        <img
                            src="https://placehold.co/40x40"
                            alt="Logo"
                            className="mr-2"
                        />
                        <span className="text-orange-500 text-xl font-bold">
                            iPrestasi
                        </span>
                    </div>
                    <nav className="flex space-x-4">
                        <a href="#" className="text-gray-700">
                            Home
                        </a>
                        <a href="#" className="text-gray-700">
                            Lomba
                        </a>
                        <a href="#" className="text-gray-700">
                            Beasiswa
                        </a>
                        <a href="#" className="text-gray-700">
                            Pengabdian Masyarakat
                        </a>
                        <a href="#" className="text-gray-700">
                            Penelitian
                        </a>
                        <a href="#" className="text-orange-500">
                            Pendataan
                        </a>
                        <a href="#" className="text-gray-700">
                            FAQ
                        </a>
                    </nav>
                    <div className="flex items-center">
                        <img
                            src="https://placehold.co/40x40"
                            alt="User Avatar"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </header>
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Pendataan {tabValue} Lomba
                    </h1>
                    <div className="flex justify-center mb-6 w-[280px]">
                        <button
                            onClick={() => {
                                settabValue("Partisipasi");
                            }}
                            className="bg-green-500 text-white py-2 px-4 w-[140px] rounded-l-lg"
                        >
                            Partisipasi
                        </button>
                        <button
                            onClick={() => {
                                settabValue("Prestasi");
                            }}
                            className="bg-gray-200 text-gray-700 py-2 px-4 w-[140px] rounded-r-lg"
                        >
                            Prestasi
                        </button>
                    </div>
                    <BiodataUser />
                    {tabValue === "Partisipasi" ? (
                        <TabPartisipasiLomba />
                    ) : (
                        <TabPrestasiLomba />
                    )}
                </div>
            </main>
        </div>
    );
};

export default PendataanBeasiswa;
