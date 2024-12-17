import { useForm } from "@inertiajs/react";
import React from "react";
import toast from "react-hot-toast";

const FormPenelitianAbdimas = ({ type }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        lecturer_1: "",
        lecturer_2: "",
        lecturer_3: "",
        lecturer_4: "",
        lecturer_5: "",
        description: "",
        registration_deadline: "",
        location: "",
        total_students_required: "",
        assignment_letter_url: "",
    });

    const handleSubmit = (e) => {
        const routeName =
            type === "penelitian"
                ? "researchInformation.store"
                : "abdimasInformation.store";

        e.preventDefault();
        post(route(routeName), {
            onSuccess: (res) => {
                reset();
                type === "penelitian"
                    ? toast.success("Berhasil menambahkan informasi penelitian")
                    : toast.success("Berhasil menambahkan informasi abdimas");
            },
            onError: (errors) => {
                type === "penelitian"
                    ? toast.error("Gagal menambahkan informasi penelitian")
                    : toast.error("Gagal menambahkan informasi abdimas");

                console.error(errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className="space-y-6">
                <div className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Kegiatan<span className="text-red-600">*</span>
                        </label>
                        <input
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            className="w-full border rounded-lg p-3"
                            placeholder="Masukkan Nama Kegiatan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Lokasi Kegiatan<span className="text-red-600">*</span>
                        </label>
                        <input
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
                            type="text"
                            className="w-full border rounded-lg p-3"
                            placeholder="Masukkan Lokasi Kegiatan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Waktu Mulai Pendaftaran<span className="text-red-600">*</span>
                        </label>
                        <input
                            value={data.event_time_start}
                            onChange={(e) =>
                                setData("event_time_start", e.target.value)
                            }
                            type="date"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Waktu Berakhir Pendaftaran<span className="text-red-600">*</span>
                        </label>
                        <input
                            value={data.event_time_end}
                            onChange={(e) =>
                                setData("event_time_end", e.target.value)
                            }
                            type="date"
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Total Mahasiswa yang Dibutuhkan<span className="text-red-600">*</span>
                        </label>
                        <input
                            value={data.total_students_required}
                            onChange={(e) =>
                                setData(
                                    "total_students_required",
                                    e.target.value
                                )
                            }
                            type="number"
                            className="w-full border rounded-lg p-3"
                            placeholder="Masukkan Total Mahasiswa yang Dibutuhkan"
                        />
                    </div>

                    <div className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap Ketua<span className="text-red-600">*</span>
                            </label>
                            <input
                                value={data.lecturer_1}
                                onChange={(e) =>
                                    setData("lecturer_1", e.target.value)
                                }
                                type="text"
                                className="w-full border rounded-lg p-3"
                                placeholder="Hayyu Satya S.Kom., MM."
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap Dosen 2
                            </label>
                            <input
                                value={data.lecturer_2}
                                onChange={(e) =>
                                    setData("lecturer_2", e.target.value)
                                }
                                type="text"
                                className="w-full border rounded-lg p-3"
                                placeholder="Hayyu Satya S.Kom., MM."
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap Dosen 3
                            </label>
                            <input
                                value={data.lecturer_3}
                                onChange={(e) =>
                                    setData("lecturer_3", e.target.value)
                                }
                                type="text"
                                className="w-full border rounded-lg p-3"
                                placeholder="Hayyu Satya S.Kom., MM."
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap Dosen 4
                            </label>
                            <input
                                value={data.lecturer_4}
                                onChange={(e) =>
                                    setData("lecturer_4", e.target.value)
                                }
                                type="text"
                                className="w-full border rounded-lg p-3"
                                placeholder="Hayyu Satya S.Kom., MM."
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Nama Lengkap Dosen 5
                            </label>
                            <input
                                value={data.lecturer_5}
                                onChange={(e) =>
                                    setData("lecturer_5", e.target.value)
                                }
                                type="text"
                                className="w-full border rounded-lg p-3"
                                placeholder="Hayyu Satya S.Kom., MM."
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Deskripsi Kegiatan<span className="text-red-600">*</span>
                        </label>
                        <textarea
                            onChange={(e) => {
                                setData("description", e.target.value);
                            }}
                            value={data.description}
                            className="w-full border rounded-lg p-3"
                            placeholder="Tuliskan Deskripsi Kegiatan"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-orange-500 text-white py-2 px-6 rounded-lg mt-4"
                            disabled={processing}
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default FormPenelitianAbdimas;
