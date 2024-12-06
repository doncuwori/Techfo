import React from "react";
import Navbar from "@/Components/Navbar";
import RiwayatKegiatan from "@/Components/Profile/RiwayatKegiatan";
import CatatanKeaktifan from "@/Components/Profile/CatatanKeaktifan";
import ProfileSection from "@/Components/Profile/ProfileSection";
import Footer from "@/Components/Footer";
import ScrollUpButton from "@/Components/ScrollUpButton";

const Profile = () => {
    return (
        <div>
            <Navbar />
            <ProfileSection />
            <CatatanKeaktifan />
            <RiwayatKegiatan />
            <Footer />
            <ScrollUpButton />
        </div>
    );
};

export default Profile;
