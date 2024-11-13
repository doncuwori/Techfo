import React from "react";

const MainContent = () => {
    return (
        <div
            className="md:w-2/3 p-8 overflow-y-auto"
            style={{ maxHeight: "90vh" }}
        >
            <h1 className="text-3xl font-bold mb-4">
                GDSC Forward: Pixels Challenge
            </h1>
            <div className="mb-4">
                <h2 className="text-lg mb-2">Diunggah oleh</h2>
                <div className="flex items-center">
                    <img
                        src="img/logobem.png"
                        className="w-10 h-10 rounded-full mr-2"
                        alt="Profile Picture"
                    />
                    <div>
                        <p className="text-gray-700 font-bold">BEMF-IK UPNVJ</p>
                        <p className="text-gray-500">1 Juni 2004</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start mb-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Daftar
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ml-4">
                    Buku Panduan
                </button>
            </div>
            <div className="flex justify-start mb-4">
                <img
                    src="img/poster.jpeg"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[300px] object-cover rounded-md"
                />
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Batas Pendaftaran</h2>
                <div className="flex items-center">
                    <img
                        src="img/calender.png"
                        alt="Deskripsi gambar"
                        className="w-6 h-6 mr-2"
                    />
                    <p className="text-gray-700">1 Juni 2024 - 31 Juni 2024</p>
                </div>
            </div>
            <p className="text-gray-700 mb-4">
                PIXELS Challenge merupakan sebuah acara yang bertujuan untuk
                menggabungkan konsep desain UI/UX...
            </p>
            <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">Penyelenggara</h2>
                <p className="text-gray-700">
                    Google Developer Student Club STT-NF
                </p>
            </div>
        </div>
    );
};

export default MainContent;
