import BreadCrumbs from "@/Components/BreadCrumbs";
import NavbarAdmin from "@/Components/NavbarAdmin";
import DetailInfoLombaBeasiswa from "@/Components/PusatInformasi/DetailInfoLombaBeasiswa";
import React from "react";

const DetailInfoLomba = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <NavbarAdmin />

            {/* <div className="flex flex-col w-full ml-[272px] mt-8"> */}
            <main className=" flex flex-col w-full pl-[290px] py-24  items-center justify-center   ">
                <div className="flex flex-col w-[90%]">
                    <h1 className="font-semibold text-2xl">Pusat Informasi</h1>
                    <BreadCrumbs />

                    <DetailInfoLombaBeasiswa />
                </div>
            </main>
            {/* </div> */}
        </div>
    );
};

export default DetailInfoLomba;
