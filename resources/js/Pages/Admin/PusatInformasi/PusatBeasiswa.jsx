import NavbarAdmin from "@/Components/NavbarAdmin";
import React from "react";
import { Link } from "@inertiajs/react";
import TabelPusatInformasi from "@/Components/PusatInformasi/TabelPusatInformasi";

const PusatBeasiswa = ( {user} ) => {
    const data = [
        { no: 1, name: "Beasiswa 1", date: "Apr 23, 2024 - Mei 23, 2024" },
        { no: 2, name: "Beasiswa 2", date: "Apr 25, 2024 - Mei 25, 2024" },
    ];

    return (
        <div>
            <NavbarAdmin user={user} />
            <main className="pl-72 w-full z-0">
                <div className="container px-4 py-8 w-full">
                    <div className="bg-white p-6 mt-14 rounded shadow-lg">
                        {/* Header dan Search */}
                        <div className="flex justify-between items-center mb-4">
                            <div></div>
                            <div className="flex space-x-2">
                                <Link
                                    href={route("tambahInfoBeasiswa")}
                                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                                >
                                    + Tambah Informasi Beasiswa
                                </Link>
                            </div>
                        </div>

                        {/* Tabel */}
                        <TabelPusatInformasi data={data} />

                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-4 text-gray-600">
                            <div>
                                Rows per page
                                <select className="border border-gray-300 rounded ml-2 focus:ring-2 focus:ring-orange-500">
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                </select>
                            </div>
                            <div>Total 1 - 10 of 130</div>
                            <div className="flex items-center space-x-2">
                                <button className="text-gray-500 hover:text-gray-700 transition">
                                    Prev
                                </button>
                                <button className="bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600 transition">
                                    1
                                </button>
                                <button className="text-gray-500 hover:text-gray-700 transition">
                                    2
                                </button>
                                <button className="text-gray-500 hover:text-gray-700 transition">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PusatBeasiswa;
