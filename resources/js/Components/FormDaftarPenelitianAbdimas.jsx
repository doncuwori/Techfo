import React from "react";
import PernyataanLegalitas from "./PernyataanLegalitas";

const FormDaftarPenelitianAbdimas = () => {
    return (
        <div>
            <section className="mb-6">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Alamat E-mail
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Alamat Email Anda"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Nomor Telepon (Whatsapp)
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-lg p-2"
                            placeholder="Masukkan Nomor Telepon Anda"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            KHS
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            CV
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Portofolio
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Foto 3x4
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
                    <PernyataanLegalitas />
                    <div className="flex justify-end w-full">
                        <button className="mt-2 bg-orange-500 text-white py-1 px-4 rounded-lg">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default FormDaftarPenelitianAbdimas;
