import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { BiodataUser } from "@/components/BiodataUser";
import { TabDaftarBeasiswa } from "@/Components/Pendataan/PendataanBeasiswa/TabDaftarBeasiswa";
import { TabLolosBeasiswa } from "@/Components/Pendataan/PendataanBeasiswa/TabLolosBeasiswa";
import Footer from "@/Components/Footer";
import ScrollUpButton from "@/Components/ScrollUpButton";
import toast, { Toaster } from "react-hot-toast";

const PendataanBeasiswa = () => {
    const [tabValue, settabValue] = useState("Daftar");
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Navbar />
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Pendataan Mahasiswa {tabValue} Beasiswa
                    </h1>
                    <div className="flex justify-center pb-6">
                        <button
                            onClick={() => {
                                settabValue("Daftar");
                            }}
                            className={`${
                                tabValue === "Daftar"
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } py-2 px-4 w-[140px] rounded-l-lg duration-300`}
                        >
                            Daftar
                        </button>
                        <button
                            onClick={() => {
                                settabValue("Lolos");
                            }}
                            className={`${
                                tabValue === "Lolos"
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } py-2 px-4 w-[140px] rounded-r-lg duration-300`}
                        >
                            Lolos
                        </button>
                    </div>
                    <BiodataUser />
                    {tabValue === "Daftar" ? (
                        <TabDaftarBeasiswa />
                    ) : (
                        <TabLolosBeasiswa />
                    )}
                </div>
            </main>
            <Footer />
            <Toaster position="top-right" />
            <ScrollUpButton />
        </div>
    );
};

export default PendataanBeasiswa;
