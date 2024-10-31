import PernyataanLegalitas from "@/Components/PernyataanLegalitas";
import { Plus, Search } from "lucide-react";
import React, { useState } from "react";

export const TabPartisipasiLomba = () => {
    const [isGroup, setIsGroup] = useState(false);
    function handleCheckbox(e) {
        setIsGroup(e.target.checked);
    }
    return (
        <div>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Data Partisipasi Mahasiswa
                </h2>
                <div className="mb-4">
                    <div className="flex items-center mb-2 bg-orange-50 gap-3 px-2 py-1 w-fit">
                        <input
                            type="checkbox"
                            checked={isGroup}
                            onClick={handleCheckbox}
                        />
                        <p className="text-black">
                            Beri tanda Centang untuk kejuaraan beregu/kelompok
                            (Grup).
                        </p>
                    </div>
                    {isGroup && (
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
                                    type="text"
                                    className="text-sm px-2.5 py-2 rounded-l-lg border-neutral-400 border-[1.5px]"
                                    placeholder="Tuliskan NIM"
                                />
                                <button className="bg-green-500 p-2 rounded-r-lg text-white">
                                    <Search size={20} />
                                </button>
                            </div>
                            <div>
                                <button className="bg-green-500 flex gap-2 px-3 py-2 text-white rounded-lg">
                                    <Plus size={16} />
                                    <p className="text-xs">Tambahkan Anggota</p>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Delegasi ORMAWA
                    </label>
                    <select className="w-full border rounded-lg p-2">
                        <option>Bukan Delegasi dari ORMAWA</option>
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
                            <select className="w-full border rounded-lg p-2">
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
                            <select className="w-full border rounded-lg p-2">
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
                            <select className="w-full border rounded-lg p-2">
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
                        Tempat Pelaksanaan
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Tuliskan tempat pelaksanaan kegiatan..."
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Waktu Pelaksanaan
                    </label>
                    <input
                        type="date"
                        className="w-full border rounded-lg p-2"
                    />
                    <div className="flex items-center mt-2">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-gray-700">
                            Klik jika tidak pada tanggal yang sama apabila waktu
                            pelaksanaan hanya 1 hari.
                        </label>
                    </div>
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
            <section className="mb-8">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Poster Kegiatan
                    </label>
                    <div className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center">
                        <p>Click to upload or drag and drop</p>
                        <p className="text-gray-500">Max. file size: 10MB</p>
                        <button className="mt-2 bg-green-500 text-white py-1 px-4 rounded-lg">
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
                <button className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg">
                    Submit
                </button>
            </div>
        </div>
    );
};
