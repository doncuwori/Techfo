import React from "react";
import { CalendarDays } from "lucide-react";
import { formatDate } from "@/lib/helper";
import { Link } from "@inertiajs/react";

const MainContent = ({ data }) => {
    return (
        <div className="md:w-full p-8 overflow-y-auto">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-[1200px] mx-auto">
                <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
                <div className="mb-4">
                    <h2 className="text-lg mb-2">Diunggah oleh</h2>
                    <div className="flex items-center">
                        <img
                            src="/img/profile.png"
                            className="w-10 h-10 rounded-full mr-2"
                            alt="Profile Picture"
                        />
                        <div>
                            {/* CreatedBy */}
                            <p className="text-gray-700 font-bold">
                                {data.lecturer_1}
                            </p>
                            <p className="text-gray-500">
                                {formatDate(data.created_at)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start mb-4">
                    <Link href={route("daftarAbdimas")}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Daftar
                        </button>
                    </Link>
                    <Link href={route("faq")}>
                        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-4">
                            Buku Panduan
                        </button>
                    </Link>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold mb-2">
                        Batas Pendaftaran
                    </h2>
                    <div className="flex items-center">
                        <CalendarDays className="w-5 h-5 text-orange-600" />
                        <p className="text-gray-700 ml-2">
                            {formatDate(data.registration_start)} -{" "}
                            {formatDate(data.registration_end)}
                        </p>
                    </div>
                </div>
                <p className="text-gray-700 mb-4">{data.description}</p>
                <div className="mb-4">
                    <h2 className="text-lg font-bold mb-2">Penyelenggara</h2>
                    <p className="text-gray-700">{data.lecturer_1}</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
