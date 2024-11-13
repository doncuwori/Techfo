import React from "react";
import { Link } from "@inertiajs/react";
import { Clock4 } from "lucide-react";

const CardPenelitian = () => {
    const researchProjects = [
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Penelitian",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Penelitian",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Penelitian",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Penelitian",
        },
        {
            title: "INSPACE UI/UX",
            description:
                "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Penelitian",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-6 mb-12 relative z-10">
            <div className="w-full px-16 flex justify-between items-center">
                <h1 className="text-black text-2xl font-semibold">
                    Informasi Penelitian
                </h1>
                <Link
                    href={route("penelitian")}
                    className="text-orange-500 text-base font-normal text-right hover:font-bold"
                >
                    Lihat Semua
                </Link>
            </div>

            <div className="w-full px-16 flex gap-6 overflow-x-auto">
                {researchProjects.map((project, index) => (
                    <div
                        key={index}
                        className="w-[343px] h-[308px] p-4 bg-white rounded-xl border border-neutral-200 shadow-lg flex flex-col gap-2"
                    >
                        <div
                            className="w-full h-44 bg-gray-300 rounded-xl relative bg-cover bg-center"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                {project.label}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-black text-lg font-medium">
                                {project.title}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                {project.description}
                            </p>
                            <div className="flex items-center gap-2">
                                <Clock4 size={18} className="text-orange-500" />{" "}
                                <span className="text-orange-500 text-xs font-medium leading-tight">
                                    {project.date}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardPenelitian;
