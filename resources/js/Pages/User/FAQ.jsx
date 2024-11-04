import React from "react";
import Navbar from "@/Components/Navbar";
import HeaderSectionFAQ from "@/Components/FAQ/HeaderSectionFAQ";
import ProcedureLomba from "@/Components/FAQ/ProcedureLomba";
import ProcedureBeasiswa from "@/Components/FAQ/ProcedureBeasiswa";
import ProcedureAbdimas from "@/Components/FAQ/ProcedureAbdimas";
import ProcedurePenelitian from "@/Components/FAQ/ProcedurePenelitian";

function FAQ() {
    return (
        <div className="App">
            <div class="absolute inset-0 z-0 flex justify-center mt-16">
                <img
                    src="img/bgprosedure1.png"
                    alt="Deskripsi gambar"
                    class="w-full max-h-[200px] rounded-md"
                />
            </div>

            <div className="fixed inset-x-0 bottom-0 z-0 flex justify-center">
                <img
                    src="img/bgprosedure2.png"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[300px] rounded-md bg-cover"
                />
            </div>

            <Navbar />
            <HeaderSectionFAQ />
            <ProcedureLomba />
            <ProcedureBeasiswa />
            <ProcedureAbdimas />
            <ProcedurePenelitian />
        </div>
    );
}

export default FAQ;
