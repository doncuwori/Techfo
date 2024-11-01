import React from "react";
import { BiodataUser } from "@/Components/BiodataUser";
import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const DaftarAbdimas = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-[1200px] mx-auto">
                    <h1 className="text-2xl font-semibold mb-6 text-center">
                        Pendaftaran Pengabdian Masyarakat
                    </h1>
                    <BiodataUser />
                    <section className="mb-6">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Alamat E-mail
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2"
                                    placeholder="Masukkan Alamat Email Anda"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Nomor Telepon (Whatsapp)
                                </label>
                                <input
                                    type="text"
                                    className="w-full border rounded-lg p-2"
                                    placeholder="Masukkan Nomor Telepon Anda"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    KHS
                                </label>
                                <input
                                    type="file"
                                    className="w-full border rounded-lg p-2"
                                />
                                <p className="text-gray-500 text-sm">
                                    Tipe file yang dapat diunggah adalah .pdf,
                                    dengan ukuran file maksimal 1MB.
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    CV
                                </label>
                                <input
                                    type="file"
                                    className="w-full border rounded-lg p-2"
                                />
                                <p className="text-gray-500 text-sm">
                                    Tipe file yang dapat diunggah adalah .pdf,
                                    dengan ukuran file maksimal 1MB.
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Portofolio
                                </label>
                                <input
                                    type="file"
                                    className="w-full border rounded-lg p-2"
                                />
                                <p className="text-gray-500 text-sm">
                                    Tipe file yang dapat diunggah adalah .pdf,
                                    dengan ukuran file maksimal 1MB.
                                </p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Foto 3x4
                                </label>
                                <input
                                    type="file"
                                    className="w-full border rounded-lg p-2"
                                />
                                <p className="text-gray-500 text-sm">
                                    Tipe file yang dapat diunggah adalah .pdf,
                                    dengan ukuran file maksimal 1MB.
                                </p>
                            </div>
                            <PernyataanLegalitas />
                            <div className="flex justify-end w-full">
                                <button className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DaftarAbdimas;
