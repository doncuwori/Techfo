import React, { useState } from "react";
import LaporanKeaktifan from "@/Components/LandingPage/LaporanKeaktifan";
import NavbarAdmin from "@/Components/NavbarAdmin";

const DashboardAdmin = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleProfileMouseLeave = () => {
        setIsProfileDropdownOpen(false);
    };

    return (
        <div>
            <NavbarAdmin />
            <main className="pl-72 w-full z-0">
                <div className="container px-4 py-8 w-full">
                    <LaporanKeaktifan />
                </div>
            </main>
        </div>
    );
};

export default DashboardAdmin;