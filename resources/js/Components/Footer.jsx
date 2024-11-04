import React from "react";

const Footer = () => {
    return (
        <div className="w-full mx-auto h-[386px] px-8 py-16 bg-[#111111] flex flex-col justify-center items-center gap-12">
            <div className="flex justify-between w-full">
                {/* Faculty Info Section */}
                <div className="flex flex-col gap-6 ml-20 max-w-[353px]">
                    <div className="flex items-center gap-3.5">
                        <img
                            className="w-14 h-14"
                            src="img/upn.png"
                            alt="Faculty Logo"
                        />
                        <div className="text-[#fe632e] text-base font-bold">
                            FAKULTAS ILMU KOMPUTER
                            <br />
                            UPN VETERAN JAKARTA
                        </div>
                    </div>
                    <div className="text-[#fcfcfc] text-base font-normal leading-snug">
                        Universitas Pembangunan Nasional Veteran Jakarta
                        <br />
                        Jl. RS. Fatmawati, Pondok Labu, Jakarta Selatan, DKI
                        Jakarta. 12450.
                        <br />
                        +6221-765 6971
                        <br />
                        upnvj@upnvj.ac.id
                    </div>
                </div>

                {/* Technology Information Section */}
                <div className="flex flex-col gap-3 max-w-[353px]">
                    <div className="flex items-center gap-2">
                        <div className="w-14 h-14 bg-[#d9d9d9] rounded-full flex items-center justify-center border-2 border-[#fcfcfc]">
                            <img
                                className="w-12 h-12 rounded-full"
                                src="/img/LogoTechfo.jpg"
                                alt="Technology Icon"
                            />
                        </div>
                        <div className="text-xl font-bold">
                            <span className="text-white">Technology</span>
                            <span className="text-[#fb8207]"> Information</span>
                        </div>
                    </div>
                    <div className="text-[#fcfcfc] text-base font-bold">
                        Project Akhir Mahasiswa
                    </div>
                    <div className="text-[#fcfcfc] text-base font-normal leading-snug">
                        Website yang memuat informasi seputar lomba, beasiswa,
                        penelitian dosen, dan pengabdian masyarakat oleh dosen.
                    </div>
                </div>

                {/* Student Project Section */}
                <div className="flex flex-col gap-6 mr-20 max-w-[262px]">
                    <div className="text-[#fcfcfc] text-base font-semibold">
                        Project Akhir Mahasiswa FIK 2021
                    </div>
                    <div className="text-[#fcfcfc] text-base font-normal">
                        Khaliza Fania - 2110512020
                        <br />
                        Elmira Ardelia - 2110512046
                        <br />
                        Andi Setiawan - 2110512083
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-[#fcfcfc] text-sm font-normal text-center">
                Copyright ©2024 Fakultas Ilmu Komputer UPN Veteran Jakarta
            </div>
        </div>
    );
};

export default Footer;
