import React from "react";

export const TabPartisipasiLomba = () => {
    return (
        <div>
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                    Data Partisipasi Mahasiswa
                </h2>
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <i className="fas fa-exclamation-circle text-orange-500 mr-2"></i>
                        <p className="text-orange-500">
                            Beri tanda Centang untuk kegiatan borang/kelompok
                            (1keg).
                        </p>
                    </div>
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                        <p>
                            Perhatian! Isikan NIM atau NPM anggota yang
                            diperkenankan menjadi ketua anggota. Untuk anggota
                            diisikan menghubungi ketua untuk proses memasukkan
                            data ketanggapan pada form ini prestasi mahasiswa.
                        </p>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Tuliskan NIM
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-grow border rounded-l-lg p-2"
                            placeholder="Tuliskan NIM"
                        />
                        <button className="bg-green-500 text-white p-2 rounded-r-lg">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Delegasi ORMAWA
                    </label>
                    <select className="w-full border rounded-lg p-2">
                        <option>Bukan Delegasi dari ORMAWA</option>
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
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Bidang
                    </label>
                    <select className="w-full border rounded-lg p-2">
                        <option>Pilih Bidang Lomba</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Prestasi
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Juara 1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Tingkat Prestasi
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg p-2"
                        placeholder="Provinsi"
                    />
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
            <section className="mb-8">
                <h2 className="text-xl font-bold mb-4">Pernyataan Legalitas</h2>
                <div className="border p-4 rounded-lg">
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label className="text-gray-700">
                            Saya menyatakan bahwa data yang terunggah adalah
                            sesuai dengan aslinya dan data yang saya isikan
                            benar. Apabila suatu hari ditemukan data yang tidak
                            benar, saya bersedia menerima sanksi sesuai dengan
                            ketentuan yang berlaku.
                        </label>
                    </div>
                </div>
            </section>
            <div className="flex justify-end w-full">
                <button className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg">
                    Submit
                </button>
            </div>
        </div>
    );
};
