import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import NavbarAdmin from "@/Components/NavbarAdmin";
import { FormLombaBeasiswa } from "@/Components/PusatInformasi/TambahInformasi/FormLombaBeasiswa";
import React from "react";

const TambahInfoBeasiswa = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <NavbarAdmin />

            <div className="flex w-full ml-[256px] mt-8">
                <main className=" flex grow   items-center justify-center py-14 px-4 ">
                    <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] w-[70%] mx-auto">
                        <h1 className="text-center text-2xl font-bold mb-6">
                            Tambah Informasi Beasiswa
                        </h1>
                        <FormLombaBeasiswa />
                    </div>
                </main>
            </div>
        </div>
    );
};
export default TambahInfoBeasiswa;
