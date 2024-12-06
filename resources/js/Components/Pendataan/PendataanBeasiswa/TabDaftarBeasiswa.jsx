import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import React, { useState } from "react";

export const TabDaftarBeasiswa = () => {
    const [posterKegiatan, setPosterKegiatan] = useState(null);

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const handleRemoveFile = (setFile) => {
        setFile(null);
    };

    return (
        <div>
            {/* Section Data Pendaftar Beasiswa */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Data Pendaftar Beasiswa
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Nama Beasiswa
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Contoh: Lomba Karya Tulis Ilmiah Nasional Tahun 2017"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Jenis Beasiswa
                    </label>
                    <select className="w-full border rounded-lg p-2">
                        <option>-- Pilih Jenis Beasiswa --</option>
                        <option>Beasiswa dari Pemerintah</option>
                        <option>Beasiswa Swasta</option>
                        <option>Beasiswa dari Negara Maju</option>
                        <option>Beasiswa dari Komunitas</option>
                        <option>Beasiswa dari Perguruan Tinggi</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Penyelenggara
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan penyelenggara kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Negara Penyelenggara
                    </label>
                    <select className="w-full border rounded-lg p-2">
                        <option>Pilih Negara Penyelenggara</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Waktu Pelaksanaan
                    </label>
                    <input
                        type="date"
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Deskripsi Kegiatan
                    </label>
                    <textarea
                        className="w-full border rounded-lg p-2"
                        placeholder="Write text here..."
                    ></textarea>
                </div>
            </section>

            {/* Section Dokumen Pendukung */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dokumen Pendukung</h2>

                {/* Poster Kegiatan */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Poster Kegiatan
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <input
                            type="file"
                            id="poster-kegiatan"
                            className="hidden"
                            onChange={(e) =>
                                handleFileChange(e, setPosterKegiatan)
                            }
                        />
                        <label
                            htmlFor="poster-kegiatan"
                            className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg cursor-pointer"
                        >
                            Browse File
                        </label>
                    </div>
                    {posterKegiatan && (
                        <div className="flex items-center mt-2">
                            <span className="text-gray-700">
                                {posterKegiatan.name}
                            </span>
                            <button
                                onClick={() =>
                                    handleRemoveFile(setPosterKegiatan)
                                }
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                ✖
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Pernyataan Legalitas */}
            <PernyataanLegalitas />

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};
