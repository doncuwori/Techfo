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
                console.log("hai");
                type === "penelitian"
                    ? toast.success("Berhasil menambahkan informasi penelitian")
                    : toast.success(" Berhasil menambahkan informasi abdimas");
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
            <section className="mb-6">
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Kegiatan
                        </label>
                        <input
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
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
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
                            }
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
                            value={data.registration_deadline}
                            onChange={(e) =>
                                setData("registration_deadline", e.target.value)
                            }
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
                            value={data.total_students_required}
                            onChange={(e) =>
                                setData(
                                    "total_students_required",
                                    e.target.value
                                )
                            }
                            type="number"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Total Mahasiswa yang Dibutuhkan"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nama Lengkap Dosen 1
                        </label>
                        <input
                            value={data.lecturer_1}
                            onChange={(e) =>
                                setData("lecturer_1", e.target.value)
                            }
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
                            value={data.lecturer_2}
                            onChange={(e) =>
                                setData("lecturer_2", e.target.value)
                            }
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
                            value={data.lecturer_3}
                            onChange={(e) =>
                                setData("lecturer_3", e.target.value)
                            }
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
                            value={data.lecturer_4}
                            onChange={(e) =>
                                setData("lecturer_4", e.target.value)
                            }
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
                            value={data.lecturer_5}
                            onChange={(e) =>
                                setData("lecturer_5", e.target.value)
                            }
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Hayyu Satya S.Kom., MM."
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Deskripsi Kegiatan
                        </label>
                        <textarea
                            onChange={(e) => {
                                setData("description", e.target.value);
                            }}
                            value={data.description}
                            className="w-full border rounded-lg p-2"
                            placeholder="Write text here..."
                        ></textarea>
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
                </div>
            </section>
        </form>
    );
};

export default FormPenelitianAbdimas;
