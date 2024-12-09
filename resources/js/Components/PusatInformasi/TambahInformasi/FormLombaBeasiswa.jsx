import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const FormLombaBeasiswa = ({ type }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        organizer: "",
        event_time: "",
        description: "",
        poster_url: "",
    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        // Clear the file input field
        document.getElementById("fileInput").value = null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const routeName =
            type === "lomba"
                ? "competitionInformation.store"
                : "scholarshipInformation.store";

        post(route(routeName), {
            onSuccess: () => {
                console.log('success')
                type === "lomba"
                    ? toast.success("Informasi Lomba berhasil ditambahkan")
                    : toast.success("Informasi Beasiswa berhasil ditambahkan");
                reset();
            },
            onError: (errors) => {
                toast.error("Terjadi kesalahan");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className="mb-8">
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Nama Kegiatan<span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full border rounded-lg p-2"
                        placeholder="Contoh: Lomba Karya Tulis Ilmiah Nasional Tahun 2017"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="organizer"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Penyelenggara<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="organizer"
                        type="text"
                        value={data.organizer}
                        onChange={(e) => setData("organizer", e.target.value)}
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan penyelenggara kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="event_time"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Waktu Pelaksanaan<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="event_time"
                        type="date"
                        value={data.event_time}
                        onChange={(e) => setData("event_time", e.target.value)}
                        className="w-full border rounded-lg p-2"
                    />
                    <div className="flex items-center mt-2">
                        <input type="calendar" className="mr-2" />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="event_time"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Waktu Berakhir<span className="text-red-600">*</span>
                    </label>
                    <input
                        id="event_time"
                        type="date"
                        value={data.event_time}
                        onChange={(e) => setData("event_time", e.target.value)}
                        className="w-full border rounded-lg p-2"
                    />
                    <div className="flex items-center mt-2">
                        <input type="calendar" className="mr-2" />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Deskripsi Kegiatan<span className="text-red-600">*</span>
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
            <section className="mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Poster Kegiatan<span className="text-red-600">*</span>
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            className="hidden"
                            id="fileInput"
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="fileInput"
                            className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg cursor-pointer inline-block"
                        >
                            Browse File
                        </label>
                        {selectedFile && (
                            <div className="mt-4 flex items-center justify-center">
                                <p className="text-green-500 mr-2">
                                    {selectedFile.name}
                                </p>
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700"
                                    onClick={handleRemoveFile}
                                    aria-label="Remove file"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                    </div>
                    <p className="text-gray-500 mt-2">
                        Ketentuan file Poster Kegiatan yang diunggah:
                    </p>
                    <ul className="text-gray-500 list-disc list-inside">
                        <li>
                            Poster Kegiatan lomba yang diikuti, menunjukkan nama
                            lomba;
                        </li>
                        <li>
                            Tipe file yang dapat diunggah antara lain: .jpg,
                            .jpeg, .png;
                        </li>
                        <li>Ukuran file maksimal 1MB.</li>
                    </ul>
                </div>
            </section>

            <div className="flex justify-end w-full">
                <button
                    type="submit"
                    className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};