import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

export const TabDaftarBeasiswa = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        type: "",
        organizer: "",
        host_country: "",
        event_date: "",
        description: "",
        created_by: "",
        proof_scan_url: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("scholarshipRegistrant.store"), {
            onSuccess: (res) => {
                reset();
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
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Data Pendaftar Beasiswa
                </h2>
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
                    <label
                        htmlFor="type"
                        className="block text-gray-700 font-bold mb-2"
                    >
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
                    <label className="block text-gray-700 font-bold mb-2">
                        Penyelenggara
                    </label>
                    <input
                        value={data.organizer}
                        onChange={(e) => setData("organizer", e.target.value)}
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan penyelenggara kegiatan..."
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="host_country"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Negara Penyelenggara
                    </label>
                    <select
                        value={data.host_country}
                        onChange={(e) =>
                            setData("host_country", e.target.value)
                        }
                        id="host_country"
                        className="w-full border rounded-lg p-2"
                    >
                        <option>Pilih Negara Penyelenggara</option>

                        <option>Indonesia</option>
                        <option>Malaysia</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="event_date"
                        className="block text-gray-700 font-bold mb-2"
                    >
                        Waktu Pelaksanaan
                    </label>
                    <input
                        type="date"
                        value={data.event_date}
                        onChange={(e) => setData("event_date", e.target.value)}
                        id="event_date"
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
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Dokumen Pendukung</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Poster Kegiatan
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <button
                            type="file"
                            className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg"
                        >
                            Browse File
                        </button>
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
            <PernyataanLegalitas />
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
