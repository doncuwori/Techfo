import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import { BiodataUser } from "@/components/BiodataUser";
import { TabPrestasiLomba } from "@/Components/Pendataan/PendataanLomba/TabPrestasiLomba";
import { TabPartisipasiLomba } from "@/Components/Pendataan/PendataanLomba/TabPartisipasiLomba";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const PendataanLomba = () => {
    const [tabValue, settabValue] = useState("Partisipasi");
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
                        Pendataan {tabValue} Lomba
                    </h1>
                    <div className="flex justify-center">
                        <button
                            onClick={() => {
                                settabValue("Partisipasi");
                            }}
                            className={`${
                                tabValue === "Partisipasi"
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } py-2 px-4 w-[140px] rounded-l-lg duration-300`}
                        >
                            Partisipasi
                        </button>
                        <button
                            onClick={() => {
                                settabValue("Prestasi");
                            }}
                            className={`${
                                tabValue === "Prestasi"
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } py-2 px-4 w-[140px] rounded-r-lg duration-300`}
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
            <Footer />
        </div>
    );
};
export default PendataanLomba;
