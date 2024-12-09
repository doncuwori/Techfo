import React from "react";
import { Link } from "@inertiajs/react";

const CompetionCard = ({ title, description, date, image, label }) => (
    <div className="w-[343px] h-[308px] p-4 bg-white rounded-xl border border-neutral-200 shadow-lg flex flex-col gap-2">
        {/* Gambar */}
        <div
            className="w-full h-44 bg-gray-300 rounded-xl relative bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                {label}
            </div>
        </div>
        {/* Konten */}
        <div className="flex flex-col gap-2">
            <h2 className="text-black text-lg font-medium">{title}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
            <div className="flex items-center gap-2">
                <img src="img/waktu.png" alt="Jam" className="w-4 h-4 object-contain" />
                <span className="text-orange-500 text-xs font-medium leading-tight">{date}</span>
            </div>
        </div>
    </div>
);

const CardLomba = () => {
    const competitions = [
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/posterlomba.jpg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/posterlomba.jpg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/posterlomba.jpg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/posterlomba.jpg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/posterlomba.jpg",
            label: "Lomba",
        },
    ];

    return (
        <div className="w-full flex flex-col gap-6 mb-12 relative z-10">
            {/* Header */}
            <div className="w-full px-6 md:px-16 flex justify-between items-center">
                <h1 className="text-black text-2xl font-semibold">Informasi Lomba</h1>
                <Link
                    href={route("abdimas")}
                    className="text-orange-500 text-base font-normal hover:font-bold"
                >
                    Lihat Semua
                </Link>
            </div>
            {/* Konten */}
            <div className="w-full px-6 md:px-16 flex gap-6 overflow-x-auto">
                {competitions.map((competition, index) => (
                    <CompetionCard
                        key={index}
                        title={competition.title}
                        description={competition.description}
                        date={competition.date}
                        image={competition.image}
                        label={competition.label}
                    />
                ))}
            </div>
            <div className="w-full px-6 md:px-16 flex gap-6 overflow-x-auto">
                {competitions.map((competition, index) => (
                    <CompetionCard
                        key={index}
                        title={competition.title}
                        description={competition.description}
                        date={competition.date}
                        image={competition.image}
                        label={competition.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardLomba;
