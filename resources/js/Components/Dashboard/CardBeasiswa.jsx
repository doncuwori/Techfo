import React from "react";
import { Clock4 } from 'lucide-react';

const CardBeasiswa = () => {
    const scholarships = [
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Beasiswa",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Beasiswa",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Beasiswa",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Beasiswa",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Beasiswa",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-6 mb-12 relative z-10">
            <div className="w-full px-16 flex justify-between items-center">
                <h1 className="text-black text-2xl font-semibold">
                    Informasi Beasiswa
                </h1>
                <a
                    href="#"
                    className="text-orange-500 text-base font-normal text-right"
                >
                    Lihat Semua
                </a>
            </div>

            <div className="w-full px-16 flex gap-6 overflow-x-auto">
                {scholarships.map((scholarship, index) => (
                    <div
                        key={index}
                        className="w-[343px] h-[308px] p-4 bg-white rounded-xl border border-neutral-200 shadow-lg flex flex-col gap-2"
                    >
                        <div
                            className="w-full h-44 bg-gray-300 rounded-xl relative bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${scholarship.image})`,
                            }}
                        >
                            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                {scholarship.label}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-black text-lg font-medium">
                                {scholarship.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {scholarship.description}
                            </p>
                            <div className="flex items-center gap-2">
                                <Clock4 size={18} className="text-orange-500" />{" "}
                                <span className="text-orange-500 text-xs font-medium leading-tight">
                                    {scholarship.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardBeasiswa;
