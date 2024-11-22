import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Menu, X } from "lucide-react"; // Import X icon for close button

const Navbar = () => {
    const [isPendataanDropdownOpen, setIsPendataanDropdownOpen] =
        useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu state

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
        if (isPendataanDropdownOpen) {
            setIsPendataanDropdownOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="w-full h-16 px-4 md:px-10 py-4 bg-white shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
                        <ApplicationLogo className="w-full h-full object-cover" />
                    </div>

                    <Link
                        href={route("dashboardUser")}
                        className="flex items-center"
                    >
                        <span className="text-gray-900 text-lg md:text-2xl font-semibold">
                            Tech
                        </span>
                        <span className="text-[#fe632e] text-lg md:text-2xl font-semibold">
                            fo
                        </span>
                    </Link>
                </div>
            </div>

            <div className="flex-grow flex items-center justify-center">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href={route("dashboardUser")}
                        className="px-3 py-1 md:px-4 md:py-2 bg-[#fe632e] text-white rounded-2xl text-sm md:text-base font-medium transition duration-150 hover:bg-[#e65c24]"
                    >
                        Home
                    </Link>
                    <Link
                        href={route("lomba")}
                        className="text-gray-900 text-sm md:text-base font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold"
                    >
                        Lomba
                    </Link>
                    <Link
                        href={route("beasiswa")}
                        className="text-gray-900 text-sm md:text-base font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold"
                    >
                        Beasiswa
                    </Link>
                    <Link
                        href={route("abdimas")}
                        className="text-gray-900 text-sm md:text-base font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold"
                    >
                        Pengabdian Masyarakat
                    </Link>
                    <Link
                        href={route("penelitian")}
                        className="text-gray-900 text-sm md:text-base font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold"
                    >
                        Penelitian
                    </Link>

                    {/* Pendataan Dropdown */}
                    <div className="relative" onMouseEnter={handlePendataanMouseEnter} onMouseLeave={handlePendataanMouseLeave}>
                        <button onClick={togglePendataanDropdown} className="flex items-center text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e] hover:font-bold">
                            <span>Pendataan</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isPendataanDropdownOpen && (
                            <div className="absolute left-0 mt-0 w-72 border bg-white rounded-md shadow-lg z-20" onMouseEnter={handlePendataanMouseEnter} onMouseLeave={handlePendataanMouseLeave}>
                                <Link href={route('pendataanLomba')} className="block px-4 py-2 hover:bg-orange-100">
                                    <div className="text-black text-base font-semibold leading-normal">Pendataan Lomba</div>
                                    <div className="text-gray-500 text-xs font-normal leading-tight">Lakukan pendataan lomba disini</div>
                                </Link>
                                <Link href={route('pendataanBeasiswa')} className="block px-4 py-2 hover:bg-orange-100">
                                    <div className="text-black text-base font-semibold leading-normal">Pendataan Beasiswa</div>
                                    <div className="text-gray-500 text-xs font-normal leading-tight">Lakukan pendataan besiswa disini</div>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href={route('faq')} className="text-gray-900 text-sm md:text-base font-medium hover:text-[#fe632e] hover:font-bold">
                        FAQ
                    </Link>
                </nav>
            </div>

            {/* Profile Dropdown (Desktop) */}
            <div className="relative hidden md:block">
                <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center space-x-2 transition duration-150 hover:text-[#fe632e]"
                >
                    <img
                        className="w-9 h-9 md:w-9 md:h-9 rounded-full ml-auto cursor-pointer"
                        src="/img/profile.png"
                        alt="User Profile"
                    />
                </button>
                {isProfileDropdownOpen && (
                    <div
                        className="absolute right-0 mt-0 w-56 border bg-white rounded-md shadow-lg z-10"
                        onMouseLeave={handleProfileMouseLeave}
                    >
                        <Link
                            href={route("profile")}
                            className="block px-4 py-2 text-gray-700 transition duration-150 hover:bg-orange-50 hover:text-[#fe632e] hover:font-bold"
                        >
                            Profil Saya
                        </Link>
                        <Link
                            href={route("loginUser")}
                            className="block px-4 py-2 text-gray-700 transition duration-150 hover:bg-orange-50 hover:text-[#fe632e] hover:font-bold"
                        >
                            Keluar
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Menu Toggle (AlignJustify Icon) */}
            <button
                className="md:hidden text-gray-900 ml-auto transition-transform duration-200 hover:scale-110"
                onClick={toggleMobileMenu}
            >
                {/* Mobile icon toggle: AlignJustify or X */}
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6 transition-all transform rotate-180 hover:text-[#fe632e] hover:scale-105 hover:rotate-90" />
                ) : (
                    <Menu className="w-6 h-6 transition-all hover:text-[#fe632e] hover:scale-105" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20">
                    <nav className="flex flex-col items-center gap-4 py-4 w-full">
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("dashboardUser")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Home
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("lomba")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Lomba
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("beasiswa")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Beasiswa
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("abdimas")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Pengabdian Masyarakat
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("penelitian")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Penelitian
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("penelitian")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Pendataan
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("profile")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Profil Saya
                            </Link>
                        </div>
                        <div className="w-full hover:bg-orange-50 transition duration-150">
                            <Link
                                href={route("loginUser")}
                                className="px-4 py-2 text-gray-900 text-lg font-medium transition duration-150 hover:text-[#fe632e] hover:font-bold w-full block text-center"
                            >
                                Keluar
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
