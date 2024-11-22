import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { FormLombaBeasiswa } from "@/Components/PusatInformasi/TambahInformasi/FormLombaBeasiswa";
import React from "react";

const TambahInfoLomba = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Tambah Informasi Lomba
                    </h1>
                    {/* Form */}
                    <FormLombaBeasiswa />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TambahInfoLomba;
