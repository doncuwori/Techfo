import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import React from "react";

const FormPenelitianAbdimas = () => {
    return (
        <div>
            <section className="mb-6">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Kegiatan
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Nama Kegiatan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Lokasi Kegiatan
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Lokasi Kegiatan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Batas Pendaftaran
                        </label>
                        <input
                            type="date"
                            className="w-full border rounded-lg p-2"
                        />
                        <div className="flex items-center mt-2">
                            <input type="calendar" className="mr-2" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Total Mahasiswa yang Dibutuhkan
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Total Mahasiswa yang Dibutuhkan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 1
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 2
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 3
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 4
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 5
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Surat Tugas
                        </label>
                        <input
                            type="file"
                            className="w-full border rounded-lg p-2"
                        />
                        <p className="text-gray-500 text-sm">
                            Tipe file yang dapat diunggah adalah .pdf, dengan
                            ukuran file maksimal 1MB.
                        </p>
                    </div>

                    <div className="flex justify-end w-full">
                        <button
                            type="submit"
                            className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FormPenelitianAbdimas;
