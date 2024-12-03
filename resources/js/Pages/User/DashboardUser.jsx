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
import ScrollUpButton from "@/Components/ScrollUpButton";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <HeaderSection />
            <SearchBox />
            <ProcedureCards />
            <CardLomba />
            <CardBeasiswa />
            <CardAbdimas />
            <CardPenelitian />
            <Footer />
            <ScrollUpButton />
        </div>
    );
};

export default Dashboard;
