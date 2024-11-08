import React from "react";
import { University, MapPinned, PhoneCall, Mail, UserRound, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full mx-auto h-[515px] px-8 py-16 bg-[#111111] flex flex-col justify-center items-center gap-12">
            <div className="flex justify-between w-full">
                {/* Faculty Info Section */}
                <div className="flex flex-col gap-6 ml-14 max-w-[363px]">
                    <div className="flex items-center gap-4">
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
                        <a
                            href="https://www.upnvj.ac.id/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 flex items-center gap-3"
                        >
                            <University className="w-6 h-6 text-orange-500" />{" "}
                            Universitas Pembangunan Nasional "Veteran" Jakarta
                        </a>
                        <br />
                        <a
                            href="https://maps.app.goo.gl/11a4NCFJruxPq5Yh9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-500 flex items-center gap-3"
                        >
                            <MapPinned className="w-8 h-8 text-orange-500" />{" "}
                            Jl. RS. Fatmawati, Pondok Labu, Jakarta Selatan, DKI
                            Jakarta. 12450.
                        </a>
                        <br />
                        <a
                            href="tel:+62217656971"
                            className="hover:text-orange-500 flex items-center gap-3"
                        >
                            <PhoneCall className="w-5 h-5 text-orange-500" />{" "}
                            +62 765 6971
                        </a>
                        <br />
                        <a
                            href="mailto:upnvj@upnvj.ac.id"
                            className="hover:text-orange-500 flex items-center gap-3"
                        >
                            <Mail className="w-5 h-5 text-orange-500" />{" "}
                            upnvj@upnvj.ac.id
                        </a>
                        <br />
                        <div className="text-white text-lg mt-2 font-bold">
                            Social Media
                        </div>
                        <div className="flex mt-2 gap-2">
                            <a
                                href="https://www.instagram.com/upnveteranjakarta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 hover:scale-110 transform transition-transform flex items-center gap-3"
                            >
                                <Instagram className="w-8 h-8 text-orange-500" />
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UCMw_GH6YVHMSHKcSA2WJjhw/videos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 hover:scale-110 transform transition-transform flex items-center gap-3 ml-4"
                            >
                                <Youtube className="w-10 h-10 text-orange-500" />
                            </a>
                            <a
                                href="https://www.x.com/upnjakarta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 hover:scale-110 transform transition-transform flex items-center gap-3 ml-4"
                            >
                                <Twitter className="w-8 h-8 text-orange-500" />
                            </a>
                            <a
                                href="https://www.facebook.com/infoupnjakarta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-orange-500 hover:scale-110 transform transition-transform flex items-center gap-3 ml-4"
                            >
                                <Facebook className="w-8 h-8 text-orange-500" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Technology Information Section */}
                <div className="flex flex-col gap-5 max-w-[397px]">
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
                <div className="flex flex-col gap-6 mr-14 max-w-[282px]">
                    <div className="text-[#fcfcfc] text-base font-semibold">
                        Project Akhir Mahasiswa FIK 2021
                    </div>
                    <div className="text-[#fcfcfc] text-base font-normal">
                        <div className="flex items-center gap-3">
                            <UserRound className="w-5 h-5" /> {/* Icon */}
                            Khaliza Fania - 2110512020
                        </div>
                        <div className="flex items-center gap-3">
                            <UserRound className="w-5 h-5" /> {/* Icon */}
                            Elmira Ardelia - 2110512046
                        </div>
                        <div className="flex items-center gap-3">
                            <UserRound className="w-5 h-5" /> {/* Icon */}
                            Andi Setiawan - 2110512083
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 max-w-[100%] lg:max-w-[300px]">
                        <div className="text-white text-lg font-bold">
                            Find Us Here
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.598723401264!2d106.7934897592435!3d-6.316324941843607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee3e065d4f6b%3A0xe176f81a31564166!2sUniversitas%20Pembangunan%20Nasional%20Veteran%20Jakarta!5e0!3m2!1sen!2sid!4v1730907281576!5m2!1sen!2sid"
                            width="100%"
                            height="200"
                            style={{ border: "none", borderRadius: "10px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="text-[#fcfcfc] text-sm font-normal text-center">
                Copyright ©2024 Fakultas Ilmu Komputer UPN "Veteran" Jakarta
            </div>
        </div>
    );
};

export default Footer;
