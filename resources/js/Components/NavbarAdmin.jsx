import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    LogOut,
    LayoutDashboard,
    Briefcase,
    ChevronDown,
    NotepadText,
} from "lucide-react";
import ApplicationLogo from "@/Components/ApplicationLogo";

const NavbarAdmin = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isLaporanDropdownOpen, setIsLaporanDropdownOpen] = useState(false); // Manage Laporan dropdown visibility
    const [isChevronRotated, setIsChevronRotated] = useState(false); // State for rotating ChevronDown icon

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleProfileMouseLeave = () => {
        setIsProfileDropdownOpen(false);
    };

    const toggleLaporanDropdown = () => {
        setIsLaporanDropdownOpen(!isLaporanDropdownOpen); // Toggle Laporan dropdown
        setIsChevronRotated(!isChevronRotated); // Toggle Chevron icon rotation
    };

    return (
        <div>
            <div className="w-full h-18 px-4 md:px-10 py-4 bg-white shadow-md flex items-center justify-between fixed top-0 left-0 z-20">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
                            <ApplicationLogo className="w-full h-full object-cover" />
                        </div>

                        <Link href={"#"} className="flex items-center">
                            <span className="text-gray-900 text-lg md:text-2xl font-semibold">
                                Tech
                            </span>
                            <span className="text-orange-600 text-lg md:text-2xl font-semibold">
                                fo
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="relative flex items-center ml-auto">
                    <button
                        onClick={toggleProfileDropdown}
                        className="flex items-center"
                    >
                        <img
                            className="w-9 h-9 md:w-9 md:h-9 rounded-full cursor-pointer"
                            src="/img/profile.png"
                            alt="User Profile"
                        />
                        <div className="font-medium ml-2 hover:text-orange-600 cursor-pointer">
                            Badan Eksekutif Mahasiswa FIK UPNVJ
                        </div>
                    </button>

                    {isProfileDropdownOpen && (
                        <div
                            className="absolute right-0 mt-20 w-56 border bg-white rounded-md shadow-lg z-10"
                            onMouseLeave={handleProfileMouseLeave}
                        >
                            <Link
                                href={route("loginUser")}
                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:font-bold hover:text-orange-600"
                            >
                                Keluar
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Sidebar */}
            <div className="fixed top-4 left-0 w-72 h-screen bg-white shadow-md p-4 mt-16 z-10 flex flex-col">
                <ul className="flex-1">
                    {[
                        {
                            name: "Dashboard",
                            icon: <LayoutDashboard className="w-5 h-5 mr-2" />,
                        },
                        {
                            name: "Laporan",
                            icon: <Briefcase className="w-5 h-5 mr-2" />,
                            onClick: toggleLaporanDropdown, // Add onClick to toggle dropdown
                            dropdown: isLaporanDropdownOpen && ( // Conditionally render dropdown
                                <ul className="pl-8 mt-2">
                                    {[
                                        "Lomba",
                                        "Beasiswa",
                                        "Pengabdian Masyarakat",
                                        "Penelitian",
                                    ].map((subItem) => (
                                        <li
                                            key={subItem}
                                            className="mb-2 flex items-center group hover:text-orange-500"
                                        >
                                            <NotepadText className="w-4 h-4 mr-2 text-gray-500 group-hover:text-orange-500 transition-colors duration-200" />
                                            <a
                                                href="#"
                                                className="text-gray-500 group-hover:text-orange-500"
                                            >
                                                {subItem}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ),
                            iconRight: (
                                <ChevronDown
                                    className={`ml-auto w-5 h-5 text-gray-500 transform transition-transform duration-200 group-hover:text-orange-500 ${
                                        isChevronRotated ? "rotate-180" : ""
                                    }`}
                                />
                            ), // ChevronDown positioned at the far right
                        },
                    ].map((item) => (
                        <li key={item.name} className="mb-4">
                            <button
                                onClick={item.onClick}
                                className="text-gray-500 hover:text-orange-500 flex items-center w-full group"
                            >
                                {item.icon && item.icon}{" "}
                                {/* Conditionally render icon */}
                                <span className="group-hover:text-orange-500">
                                    {item.name}
                                </span>{" "}
                                {/* Hover effect on name */}
                                {item.iconRight && item.iconRight}{" "}
                                {/* Display ChevronDown icon */}
                            </button>
                            {item.dropdown && item.dropdown}{" "}
                            {/* Conditionally render dropdown */}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto mb-20">
                    <Link href={route("loginUser")}>
                        <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center justify-center gap-2">
                            <span>Keluar</span>
                            <LogOut className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarAdmin;