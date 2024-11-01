import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { BiodataUser } from "@/components/BiodataUser";
import { TabDaftarBeasiswa } from "@/Components/Pendataan/PendataanBeasiswa/TabDaftarBeasiswa";
import { TabLolosBeasiswa } from "@/Components/Pendataan/PendataanBeasiswa/TabLolosBeasiswa";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const PendataanBeasiswa = () => {
    const [tabValue, settabValue] = useState("Daftar");
    return (
<<<<<<< HEAD
        <div className="min-h-screen flex flex-col items-center">
=======
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
>>>>>>> origin/master
            <Navbar />
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Pendataan Mahasiswa {tabValue} Beasiswa
                    </h1>
                    <div className="flex justify-center">
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
        </div>
    );
};

export default PendataanBeasiswa;
