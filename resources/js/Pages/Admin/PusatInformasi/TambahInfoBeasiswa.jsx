import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { FormLombaBeasiswa } from "@/Components/PusatInformasi/TambahInformasi/FormLombaBeasiswa";
import React from "react";

const TambahInfoBeasiswa = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <Navbar />
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Tambah Informasi Beasiswa
                    </h1>
                    <FormLombaBeasiswa />
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default TambahInfoBeasiswa;
