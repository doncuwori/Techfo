import React from "react";
import Header from "@/Components/LandingPage/Header";
import HeaderSection from "@/Components/Dashboard/HeaderSection";
import LaporanKeaktifan from "@/Components/LandingPage/LaporanKeaktifan";
import Footer from "@/Components/Footer";
import ScrollUpButton from "@/Components/ScrollUpButton";

const LandingPage = ({
    competitionRegistrantsCount,
    competitionWinnersCount,
    scholarshipRegistrantsCount,
    scholarshipRecipientsCount,
}) => {
    console.log(
        competitionRegistrantsCount,
        competitionWinnersCount,
        scholarshipRegistrantsCount,
        scholarshipRecipientsCount
    );

    LandingPage.defaultProps = {
        competitionRegistrantsCount: 0,
        competitionWinnersCount: 0,
        scholarshipRegistrantsCount: 0,
        scholarshipRecipientsCount: 0,
    };
    

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
            <LaporanKeaktifan
                competitionCount={`${competitionWinnersCount}/${competitionRegistrantsCount} `}
                scholarshipCount={`${scholarshipRegistrantsCount}/${scholarshipRecipientsCount}`}
            />
            <Footer />
            <ScrollUpButton />
        </div>
    );
};

export default LandingPage;
