import React from "react";

const DetailInfoLombaBeasiswa = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
                {/* Header */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    GDSC Forward: Pixels Challenge
                </h3>

                {/* Organizer Info */}
                <div className="flex items-center mb-6">
                    <img
                        src="https://placehold.co/40x40"
                        alt="Logo of BEMF-IK UPNVJ"
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <div className="text-gray-800 font-medium">
                            BEMF-IK UPNVJ
                        </div>
                        <div className="text-gray-600 text-sm">1 Juni 2024</div>
                    </div>
                </div>

                {/* Placeholder for Image */}
                <div className="bg-gray-200 h-48 rounded mb-6 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                </div>

                {/* Registration Deadline */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800">
                        Batas Pendaftaran
                    </h4>
                    <div className="flex items-center text-gray-600">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        <span>1 Juni 2024 - 31 Juni 2024</span>
                    </div>
                </div>

                {/* Event Description */}
                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Deskripsi
                    </h4>
                    <p className="text-gray-700 mb-4">
                        PIXELS Challenge merupakan sebuah acara yang bertujuan
                        untuk menggabungkan konsep desain UI/UX dengan tujuan
                        pembangunan berkelanjutan (SDGs) yang diusung oleh PBB.
                        Dengan memanfaatkan kekuatan kreativitas dan teknologi,
                        PIXELS Challenge mendorong para peserta untuk
                        mengeksplorasi ide-ide inovatif dan solusi-solusi
                        praktis dalam memecahkan berbagai masalah yang terkait
                        dengan SDGs.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Melalui serangkaian workshop, sesi pembicara, dan
                        tantangan desain, acara ini akan memberikan platform
                        bagi para desainer, pengembang, mahasiswa, dan pemangku
                        kepentingan lainnya untuk berkolaborasi, belajar, dan
                        menciptakan solusi yang bermakna dan berdampak positif
                        bagi masyarakat global.
                    </p>
                    <p className="text-gray-700">
                        Dengan pendekatan yang berfokus pada partisipasi aktif
                        dan pengalaman praktis, PIXELS Challenge bertujuan untuk
                        menginspirasi dan memberdayakan para peserta untuk
                        menggunakan keahlian mereka dalam desain UI/UX sebagai
                        alat untuk menciptakan perubahan positif yang nyata
                        dalam mewujudkan SDGs.
                    </p>
                </div>

                {/* Organizer */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                        Penyelenggara
                    </h4>
                    <p className="text-gray-700">
                        Google Developer Student Club STT-NF
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailInfoLombaBeasiswa;
