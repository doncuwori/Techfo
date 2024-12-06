import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import FormPenelitianAbdimas from "@/Components/PusatInformasi/TambahInformasi/FormPenelitianAbdimas";
import React from "react";
import { Toaster } from "react-hot-toast";

const TambahInfoPenelitian = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <Navbar />
            <main className="container mx-auto flex-grow py-10 px-6">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                    <h1 className="text-center text-2xl font-bold mb-6">
                        Tambah Informasi Penelitian
                    </h1>
                    <FormPenelitianAbdimas type="penelitian" />
                </div>
            </main>
            <Footer />
            <Toaster position="top-right" />
        </div>
    );
};

export default TambahInfoPenelitian;
