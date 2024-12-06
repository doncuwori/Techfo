import React, { useState } from "react";
import LaporanKeaktifan from "@/Components/LandingPage/LaporanKeaktifan";
import NavbarAdmin from "@/Components/NavbarAdmin";

const DashboardAdmin = ({
    competitionRegistrantsCount,
    competitionWinnersCount,
    scholarshipRegistrantsCount,
    scholarshipRecipientsCount,
    
}) => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleProfileMouseLeave = () => {
        setIsProfileDropdownOpen(false);
    };

    console.log(
        competitionRegistrantsCount,
        competitionWinnersCount,
        scholarshipRegistrantsCount,
        scholarshipRecipientsCount
    );

    return (
        <div>
            <NavbarAdmin />
            <main className="pl-72 w-full z-0">
                <div className="container px-4 py-8 w-full">
                    <LaporanKeaktifan
                        competitionCount = {`${competitionWinnersCount}/${competitionRegistrantsCount} `}
                        scholarshipCount = {`${scholarshipRegistrantsCount}/${scholarshipRecipientsCount}`}
                    />
                </div>
            </main>
        </div>
    );
};

export default DashboardAdmin;
