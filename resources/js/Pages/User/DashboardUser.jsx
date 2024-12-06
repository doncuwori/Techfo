import React from "react";
import Navbar from "../../Components/Navbar";
import HeaderSection from "../../Components/Dashboard/HeaderSection";
import SearchBox from "../../Components/SearchBox";
import ProcedureCards from "../../Components/Dashboard/ProcedureCards";
import CardLomba from "../../Components/Dashboard/CardLomba";
import CardBeasiswa from "../../Components/Dashboard/CardBeasiswa";
import CardAbdimas from "../../Components/Dashboard/CardAbdimas";
import CardPenelitian from "../../Components/Dashboard/CardPenelitian";
import Footer from "../../Components/Footer";

const Dashboard = ({
    competitions_information,
    scholarships_information,
    abdimas_information = [],
}) => {
    return (
        <div>
            <Navbar />
            <HeaderSection />
            <SearchBox />
            <ProcedureCards />
            <CardLomba data={competitions_information} />
            <CardBeasiswa data={scholarships_information} />
            <CardAbdimas data={abdimas_information} />
            <CardPenelitian />
            <Footer />
        </div>
    );
};

export default Dashboard;
