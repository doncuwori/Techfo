import React from "react";
import { Link } from "@inertiajs/react";

const ProcedureCards = () => {
    return (
        <div className="w-full px-16 py-8 mt-10 mb-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <Link href={route('faq')} className="CardInformasi">
                    <div className="px-6 py-8 bg-white rounded-2xl shadow border flex flex-col items-start gap-3 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300">
                        <img
                            className="w-14 h-11 object-contain"
                            src="img/prosedurlomba.png"
                            alt="Prosedur Lomba"
                        />
                        <div className="Content flex flex-col gap-1">
                            <div className="ProsedurLomba text-gray-900 text-lg font-medium leading-7">
                                Prosedur Lomba
                            </div>
                            <div className="PelajariProsedurLomba text-gray-600 text-sm font-normal leading-tight">
                                Pelajari prosedur lomba agar setiap langkah
                                dalam pencapaianmu selalu tercatat!
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Card 2 */}
                <Link href={route('faq')} className="CardInformasi">
                    <div className="px-6 py-8 bg-white rounded-2xl shadow border flex flex-col items-start gap-3 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300">
                        <img
                            className="w-14 h-11 object-contain"
                            src="img/prosedurbeasiswa.png"
                            alt="Prosedur Beasiswa"
                        />
                        <div className="Content flex flex-col gap-1">
                            <div className="ProsedurBeasiswa text-gray-900 text-lg font-medium leading-7">
                                Prosedur Beasiswa
                            </div>
                            <div className="PelajariProsedurBeasiswa text-gray-600 text-sm font-normal leading-tight">
                                Pelajari prosedur beasiswa agar setiap langkah
                                menuju prestasimu selalu tercatat!
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Card 3 */}
                <Link href={route('faq')} className="CardInformasi">
                    <div className="px-6 py-8 bg-white rounded-2xl shadow border flex flex-col items-start gap-3 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300">
                        <img
                            className="w-14 h-11 object-contain"
                            src="img/prosedurabdimas.png"
                            alt="Prosedur Pengabdian Masyarakat"
                        />
                        <div className="Content flex flex-col gap-1">
                            <div className="ProsedurPengabdianMasyarakat text-gray-900 text-lg font-medium leading-7">
                                Prosedur Pengabdian Masyarakat
                            </div>
                            <div className="PelajariProsedurPengabdianMasyarakat text-gray-600 text-sm font-normal leading-tight">
                                Pelajari prosedur pengabdian masyarakat agar
                                proses pendaftaranmu lebih lancar!
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Card 4 */}
                <Link href={route('faq')} className="CardInformasi">
                    <div className="px-6 py-8 bg-white rounded-2xl shadow border flex flex-col items-start gap-3 hover:bg-orange-100 hover:scale-105 transform transition-all duration-300">
                        <img
                            className="w-12 h-11 object-contain"
                            src="img/prosedurpenelitian.png"
                            alt="Prosedur Penelitian"
                        />
                        <div className="Content flex flex-col gap-1">
                            <div className="ProsedurPenelitian text-gray-900 text-lg font-medium leading-7">
                                Prosedur Penelitian
                            </div>
                            <div className="PelajariProsedurPenelitian text-gray-600 text-sm font-normal leading-tight">
                                Pelajari prosedur penelitian agar proses
                                pendaftaranmu lebih lancar!
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProcedureCards;
