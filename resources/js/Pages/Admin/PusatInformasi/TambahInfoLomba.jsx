import Footer from "@/Components/Footer";
import NavbarAdmin from "@/Components/NavbarAdmin";
import { FormLombaBeasiswa } from "@/Components/PusatInformasi/TambahInformasi/FormLombaBeasiswa";
import React from "react";
import { Toaster } from "react-hot-toast";

const TambahInfoLomba = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <NavbarAdmin />

            <div className="flex w-full ml-[256px] mt-8">
                <main className=" flex grow   items-center justify-center py-14 px-4 ">
                    <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] w-[70%] mx-auto">
                        <h1 className="text-center text-2xl font-bold mb-10">
                            Tambah Informasi Lomba
                        </h1>
                        <FormLombaBeasiswa type="lomba"/>
                    </div>
                </main>
            </div>
            <Toaster position="top-right" />
        </div>
    );
};

export default TambahInfoLomba;
