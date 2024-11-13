import React from "react";
import Header from "@/Components/LandingPage/Header";
import HeaderSection from "@/Components/Dashboard/HeaderSection";
import LaporanKeaktifan from "@/Components/LandingPage/LaporanKeaktifan";
import Footer from "@/Components/Footer";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <HeaderSection />
            <div className="absolute inset-x-0 mt-32 z-0 flex justify-center">
                <img
                    src="img/bglandingpage.png"
                    alt="Background Image"
                    className="w-full max-h-[1500px] rounded-md"
                />
            </div>
            <LaporanKeaktifan />
            <Footer />
        </div>
    );
};

export default LandingPage;
