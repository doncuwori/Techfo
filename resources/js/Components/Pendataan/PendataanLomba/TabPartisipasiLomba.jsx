import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import { useForm, usePage } from "@inertiajs/react";
import { Plus, Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const TabPartisipasiLomba = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        is_group: false,
        leader_nim: "",
        ormawa_delegation: "",
        mentor_name: "",
        activity_name: "",
        field: "",
        degree: "",
        organizer: "",
        scope: "",
        host_country: "",
        location: "",
        activity_date_start: "",
        activity_date_end: "",
        description: "",
        poster_url: "",
        members: [],
    });
    const [memberNim, setMemberNim] = useState("");
    const [fetchedUsers, setFetchedUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(route("api.user"), {
                params: { nim: memberNim },
            });
            setFetchedUsers(response.data.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        if (memberNim != "") fetchUsers();
    }, [memberNim]);

    const onAddMember = (member) => {
        setData("members", [...data.members, member]);
        setMemberNim("");
    };

    const handleCheckbox = (e) => {
        setData("is_group", e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("competitions.store"), {
            onSuccess: (res) => {
                reset();
                toast.success("Partisipasi Lomba Berhasil Dibuat");
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Data Partisipasi Mahasiswa
                </h2>
                <div className="mb-4">
                    <div className="flex items-center mb-2 bg-orange-50 gap-3 px-2 py-1 w-fit">
                        <input
                            type="checkbox"
                            value={data.is_group}
                            id="is_group"
                            onChange={handleCheckbox}
                        />
                        <label htmlFor="is_group" className="text-black">
                            Beri tanda Centang untuk kejuaraan beregu/kelompok
                            (Grup).
                        </label>
                    </div>
                    {data.is_group && (
                        // && artinya kalau true tampilkan, kalau false ga ditampilkan
                        <div className="mt-4 flex flex-col bg-neutral-50 gap-4 p-4">
                            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                                <p>
                                    Perhatian! Isikan NIM atau NPM anggota yang
                                    diperkenankan menjadi ketua anggota. Untuk
                                    anggota diisikan menghubungi ketua untuk
                                    proses memasukkan data ketanggapan pada form
                                    ini prestasi mahasiswa.
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <input
                                    type="number"
                                    className="text-sm px-2.5 py-2 rounded-lg border-neutral-400 border-[1.5px]"
                                    placeholder="Tuliskan NIM"
                                    onChange={(e) => {
                                        setMemberNim(e.target.value);
                                    }}
                                    value={memberNim}
                                />
                                {/* <button
                                    type="button"
                                    onClick={() => onAddMember()}
                                    className="bg-green-500 p-2 rounded-r-lg text-white"
                                >
                                    <Search size={20} />
                                </button> */}
                            </div>

                            {data.members.length > 0 && (
                                <div className="flex gap-2">
                                    {data.members.map((member, index) => (
                                        <div
                                            key={member + index}
                                            className="bg-gray-300 w-fit px-2 py-1 rounded-lg flex gap-2 "
                                        >
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setData(
                                                        "members",
                                                        data.members.filter(
                                                            (u) =>
                                                                u.nim !==
                                                                member.nim
                                                        )
                                                    );
                                                }}
                                                className="flex gap-2 items-center"
                                            >
                                                {member.name} ({member.nim})
                                                <X size={20} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {fetchedUsers.length > 0 && memberNim && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold mb-2">
                                        Pilih Anggota:
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        {fetchedUsers.map((user) => (
                                            <li
                                                key={user.id}
                                                className="mb-2 flex gap-2"
                                            >
                                                {user.name} ({user.nim})
                                                <button
                                                    type="button"
                                                    className="bg-green-500 flex gap-1.5 px-1.5 py-1 text-white rounded"
                                                    onClick={() => {
                                                        onAddMember(user);
                                                    }}
                                                >
                                                    <Plus size={16} />
                                                    <p className="text-xs">
                                                        Tambahkan
                                                    </p>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div></div>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Delegasi ORMAWA
                    </label>
                    <select
                        value={data.ormawa_delegation}
                        onChange={(e) => {
                            setData("ormawa_delegation", e.target.value);
                        }}
                        className="w-full border rounded-lg p-2"
                    >
                        <option>Bukan Delegasi dari ORMAWA</option>
                        <option>Mandiri</option>
                        <option>
                            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer
                        </option>
                        <option>BI Corner</option>
                        <option>Club Frame of Photography</option>
                        <option>Commander of the Menwa</option>
                        <option>Enterprise Development Center</option>
                        <option>FIBER PRODUCTION</option>
                        <option>Five TV</option>
                        <option>Forum Kajian Islam Asy Sifa</option>
                        <option>Forum Kartu Jakarta Mahasiswa Unggul</option>
                        <option>Forum Komunikasi Islam Al Hakim</option>
                        <option>
                            Forum Mahasiswa Bidikmisi dan Forum Komunikasi
                            Mahasiswa Penerima Kartu Jakarta Mahasiswa Unggul
                        </option>
                        <option>Forum Riset dan Debat Mahasiswa</option>
                        <option>Frame of Photography</option>
                        <option>Himpunan Mahasiswa Informatika S1</option>
                        <option>Himpunan Mahasiswa Sitem Informasi</option>
                        <option>Kelompok Studi Mahasiswa Android</option>
                        <option>
                            Kelompok Studi Mahasiswa "Cyber Security"
                        </option>
                        <option>Kelompok Studi Mahasiswa Multimedia</option>
                        <option>Kelompok Studi Mahasiswa Robotika</option>
                        <option>Senat Mahasiswa Fakultas Ilmu Komputer</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Nama Kegiatan
                    </label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setData("activity_name", e.target.value);
                        }}
                        value={data.activity_name}
                        className="w-full border rounded-lg p-2"
                        placeholder="Contoh: Lomba Karya Tulis Ilmiah Nasional Tahun 2017"
                    />
                </div>
                <div className="flex gap-4">
                    <div className="flex flex-col w-full">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Tingkat Prestasi
                            </label>
                            <select
                                onChange={(e) => {
                                    setData("scope", e.target.value);
                                }}
                                value={data.scope}
                                className="w-full border rounded-lg p-2"
                            >
                                <option>-- Pilih Tingkat Prestasi --</option>
                                <option>International</option>
                                <option>Nasional</option>
                                <option>Regional</option>
                                <option>Wilayah</option>
                                <option>Daerah/Provinsi</option>
                                <option>Kabupaten/Kotan</option>
                                <option>Kecamatan</option>
                                <option>UPN "Veteran" Jakarta</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Gelar
                            </label>
                            <select
                                onChange={(e) => {
                                    setData("field", e.target.value);
                                }}
                                value={data.field}
                                className="w-full border rounded-lg p-2"
                            >
                                <option>-- Pilih Gelar --</option>
                                <option>Ilmiah/Penalaran/Akademik</option>
                                <option>Minat Khusus</option>
                                <option>Olahraga</option>
                                <option>Sains</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Bidang
                            </label>
                            <select
                                onChange={(e) => {
                                    setData("field", e.target.value);
                                }}
                                value={data.field}
                                className="w-full border rounded-lg p-2"
                            >
                                <option>-- Pilih Bidang Lomba --</option>
                                <option>Ilmiah/Penalaran/Akademik</option>
                                <option>Minat Khusus</option>
                                <option>Olahraga</option>
                                <option>Sains</option>
                                <option>Lainnya</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">
                                Dosen Pembimbing/Pendamping
                            </label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setData("mentor_name", e.target.value);
                                }}
                                value={data.mentor_name}
                                className="w-full border rounded-lg p-2"
                                placeholder="Tuliskan nama dosen pembimbing/pendamping..."
                            />
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Penyelenggara
                    </label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setData("organizer", e.target.value);
                        }}
                        value={data.organizer}
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan penyelenggara kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Negara Penyelenggara
                    </label>
                    <select
                        onChange={(e) => {
                            setData("host_country", e.target.value);
                        }}
                        value={data.host_country}
                        className="w-full border rounded-lg p-2"
                    >
                        <option>Pilih Negara Penyelenggara</option>
                        <option>Indonesia</option>
                        <option>Malaysia</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Tempat Pelaksanaan
                    </label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setData("location", e.target.value);
                        }}
                        value={data.location}
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan tempat pelaksanaan kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Waktu Pelaksanaan Dimulai
                    </label>
                    <input
                        onChange={(e) => {
                            setData("activity_date_start", e.target.value);
                        }}
                        value={data.activity_date_start}
                        type="date"
                        className="w-full border rounded-lg p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Waktu Pelaksanaan Berakhir
                    </label>
                    <input
                        onChange={(e) => {
                            setData("activity_date_end", e.target.value);
                        }}
                        value={data.activity_date_end}
                        type="date"
                        className="w-full border rounded-lg p-2"
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
            </section>
            <section className="mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Poster Kegiatan
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <button
                            type="button"
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
                    className={`mt-2 ${
                        processing ? "bg-gray-400" : "bg-orange-500"
                    }  text-white py-1 px-4 rounded-lg`}
                >
                    {processing ? "Loading..." : "Submit"}
                </button>
            </div>
        </form>
    );
};