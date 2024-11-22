import Footer from "@/Components/Footer";
import NavbarAdmin from "@/Components/NavbarAdmin";
import React from "react";

const PusatLomba = () => {
    return (
        <div>
            <NavbarAdmin />
            <main className="pl-72 w-full z-0">
                <div className="container px-4 py-8 w-full">
                    <div className="bg-white p-6 mt-14 rounded shadow-lg">
                        {/* Header dan Search */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border border-gray-300 rounded py-2 px-4 pl-10 w-full focus:ring-2 focus:ring-orange-500"
                                />
                                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition">
                                    Filter
                                </button>
                                <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                                    + Tambah Informasi
                                </button>
                            </div>
                        </div>

                        {/* Tabel */}
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-gray-100 text-left text-gray-700">
                                    <th className="border p-2">NO</th>
                                    <th className="border p-2">NAMA PROKER</th>
                                    <th className="border p-2">
                                        HARI & TANGGAL UPLOAD
                                    </th>
                                    <th className="border p-2">
                                        DEADLINE KEGIATAN
                                    </th>
                                    <th className="border p-2">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        no: 1,
                                        name: "Lomba 1",
                                        date: "Apr 23, 2024 - Mei 23, 2024",
                                    },
                                    {
                                        no: 2,
                                        name: "Lomba 2",
                                        date: "Apr 25, 2024 - Mei 25, 2024",
                                    },
                                ].map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-t hover:bg-gray-50"
                                    >
                                        <td className="border p-2">
                                            {item.no}
                                        </td>
                                        <td className="border p-2">
                                            {item.name}
                                        </td>
                                        <td className="border p-2">
                                            {item.date}
                                        </td>
                                        <td className="border p-2">
                                            {item.date}
                                        </td>
                                        <td className="border p-2">
                                            <div className="flex space-x-2">
                                                <button className="text-blue-500 hover:text-blue-600 transition">
                                                    <i className="fas fa-edit"></i>
                                                </button>
                                                <button className="text-red-500 hover:text-red-600 transition">
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex justify-between items-center mt-4 text-gray-600">
                            <div>
                                Rows per page
                                <select className="border border-gray-300 rounded py-1 px-2 ml-2 focus:ring-2 focus:ring-orange-500">
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

export default PusatLomba;
