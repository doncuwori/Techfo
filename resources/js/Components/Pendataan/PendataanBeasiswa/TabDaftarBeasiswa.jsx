import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";
import PernyataanLegalitas from "@/Components/PernyataanLegalitas";

export const TabDaftarBeasiswa = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        type: "",
        organizer: "",
        host_country: "",
        event_date: "",
        description: "",
        proof_scan_url: null, // Ini akan menyimpan file yang di-upload
    });

    const [posterKegiatan, setPosterKegiatan] = useState(null); // State untuk poster kegiatan

    // Fungsi untuk menangani perubahan file (upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPosterKegiatan(file);
            setData("proof_scan_url", file); // Set file ke state form
        }
    };

    const handleRemoveFile = () => {
        setPosterKegiatan(null); // Menghapus file
        setData("proof_scan_url", null); // Menghapus file dari form state
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("type", data.type);
        formData.append("organizer", data.organizer);
        formData.append("host_country", data.host_country);
        formData.append("event_date", data.event_date);
        formData.append("description", data.description);
        if (posterKegiatan) {
            formData.append("proof_scan_url", posterKegiatan); // Tambahkan file ke form data
        }

        post(route("scholarshipRegistrant.store"), {
            data: formData,
            onSuccess: () => {
                reset(); // Reset form setelah sukses
                toast.success("Berhasil Membuat Data Lolos Beasiswa");
            },
            onError: (errors) => {
                toast.error("Gagal Membuat Data Lolos Beasiswa");
                console.error(errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Section Data Pendaftar Beasiswa */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Data Pendaftar Beasiswa</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Nama Beasiswa
                    </label>
                    <input
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Contoh: Lomba Karya Tulis Ilmiah Nasional Tahun 2017"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                        Jenis Beasiswa
                    </label>
                    <select
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                        id="type"
                        className="w-full border rounded-lg p-2"
                    >
                        <option>-- Pilih Jenis Beasiswa --</option>
                        <option>Beasiswa dari Pemerintah</option>
                        <option>Beasiswa Swasta</option>
                        <option>Beasiswa dari Negara Maju</option>
                        <option>Beasiswa dari Komunitas</option>
                        <option>Beasiswa dari Perguruan Tinggi</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Penyelenggara</label>
                    <input
                        value={data.organizer}
                        onChange={(e) => setData("organizer", e.target.value)}
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan penyelenggara kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="host_country" className="block text-gray-700 font-bold mb-2">
                        Negara Penyelenggara
                    </label>
                    <select
                        value={data.host_country}
                        onChange={(e) => setData("host_country", e.target.value)}
                        id="host_country"
                        className="w-full border rounded-lg p-2"
                    >
                        <option>Pilih Negara Penyelenggara</option>
                        <option>Indonesia</option>
                        <option>Malaysia</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="event_date" className="block text-gray-700 font-bold mb-2">
                        Waktu Pelaksanaan
                    </label>
                    <input
                        type="date"
                        value={data.event_date}
                        onChange={(e) => setData("event_date", e.target.value)}
                        id="event_date"
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Deskripsi Kegiatan
                    </label>
                    <textarea
                        id="description"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="w-full border rounded-lg p-2"
                        placeholder="Write text here..."
                    ></textarea>
                </div>
            </section>

            {/* Section Dokumen Pendukung */}
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dokumen Pendukung</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Poster Kegiatan</label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <input
                            type="file"
                            id="poster-kegiatan"
                            className="hidden"
                            onChange={handleFileChange}
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
                            <span className="text-gray-700">{posterKegiatan.name}</span>
                            <button
                                onClick={handleRemoveFile}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                ✖
                            </button>
                        </div>
                    )}
                    <p className="text-gray-500 mt-2">
                        Ketentuan file Poster Kegiatan yang diunggah:
                    </p>
                    <ul className="text-gray-500 list-disc list-inside">
                        <li>Poster Kegiatan lomba yang diikuti, menunjukkan nama lomba;</li>
                        <li>Tipe file yang dapat diunggah antara lain: .jpg, .jpeg, .png;</li>
                        <li>Ukuran file maksimal 1MB.</li>
                    </ul>
                </div>
            </section>

            {/* Pernyataan Legalitas */}
            <PernyataanLegalitas />

            {/* Submit Button */}
            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg"
                    disabled={processing} // Menonaktifkan tombol saat sedang diproses
                >
                    Submit
                </button>
            </div>
        </form>
    );
};