import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo"; // Adjust the path as needed

const Navbar = () => {
    const [isPendataanDropdownOpen, setIsPendataanDropdownOpen] =
        useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const handlePendataanMouseEnter = () => {
        setIsPendataanDropdownOpen(true);
    };

    const handlePendataanMouseLeave = () => {
        setIsPendataanDropdownOpen(false);
    };

    const togglePendataanDropdown = () => {
        setIsPendataanDropdownOpen((prev) => !prev);
    };

    const handleProfileMouseLeave = () => {
        setIsProfileDropdownOpen(false);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen((prev) => !prev);
        // Close the pendataan dropdown if it's open
        if (isPendataanDropdownOpen) {
            setIsPendataanDropdownOpen(false);
        }
    };

    return (
        <header className="w-full h-16 px-4 md:px-10 py-4 bg-white shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
                {/* Logo and Branding */}
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
                        <ApplicationLogo className="w-full h-full object-cover" />
                    </div>

                    <a href="/dashboard" className="flex items-center">
                        <span className="text-gray-900 text-lg md:text-2xl font-semibold">
                            Tech
                        </span>
                        <span className="text-[#fe632e] text-lg md:text-2xl font-semibold">
                            fo
                        </span>
                    </a>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
                {/* Centered Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <a
                        href="#"
                        className="px-3 py-1 md:px-4 md:py-2 bg-[#fe632e] text-white rounded-2xl text-sm md:text-base font-medium"
                    >
                        Home
                    </a>
                    <a
                        href="/lomba"
                        className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                    >
                        Lomba
                    </a>
                    <a
                        href="/beasiswa"
                        className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                    >
                        Beasiswa
                    </a>
                    <a
                        href="/abdimas"
                        className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                    >
                        Pengabdian Masyarakat
                    </a>
                    <a
                        href="/penelitian"
                        className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                    >
                        Penelitian
                    </a>
                    <div
                        className="relative"
                        onMouseEnter={handlePendataanMouseEnter}
                        onMouseLeave={handlePendataanMouseLeave}
                    >
                        <button
                            onClick={togglePendataanDropdown}
                            className="flex items-center text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                        >
                            <span>Pendataan</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {isPendataanDropdownOpen && (
                            <div
                                className="absolute left-0 mt-0 w-72 border bg-white rounded-md shadow-lg z-20"
                                onMouseEnter={handlePendataanMouseEnter} // Keep dropdown open when hovering
                                onMouseLeave={handlePendataanMouseLeave} // Hide dropdown when leaving
                            >
                                <a
                                    href="/lomba-terbaru"
                                    className="block px-4 py-2 hover:bg-orange-100" // Add hover effect
                                >
                                    <div className="text-black text-base font-semibold leading-normal">
                                        Lomba Terbaru
                                    </div>
                                    <div className="text-gray-500 text-xs font-normal leading-tight">
                                        Lihat informasi lomba terbaru di sini
                                    </div>
                                </a>

                                <a
                                    href="/pendataan-lomba"
                                    className="block px-4 py-2 hover:bg-orange-100" // Add hover effect
                                >
                                    <div className="text-black text-base font-semibold leading-normal">
                                        Pendataan Lomba
                                    </div>
                                    <div className="text-gray-500 text-xs font-normal leading-tight">
                                        Lakukan pendataan keaktifan lomba di
                                        sini
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                    <a
                        href="/faq"
                        className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e]"
                    >
                        FAQ
                    </a>
                </nav>
            </div>

            {/* Profile Image with Dropdown */}
            <div className="relative">
                <button onClick={toggleProfileDropdown}>
                    <img
                        className="w-9 h-9 md:w-9 md:h-9 rounded-full ml-auto cursor-pointer"
                        src="/img/profile.png"
                        alt="User Profile"
                    />
                </button>
                {isProfileDropdownOpen && (
                    <div
                        className="absolute right-0 mt-0 w-24 border bg-white rounded-md shadow-lg z-10"
                        onMouseLeave={handleProfileMouseLeave}
                    >
                        <a
                            href="/profile"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Profile
                        </a>
                        <a
                            href="/login"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
