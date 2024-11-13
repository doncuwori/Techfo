import React from 'react';

const CardPenelitian = () => {
    const competitions = [
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Lomba",
        },
        {
            title: "INSPACE UI/UX",
            description: "Perlombaan UI/UX Design Nasional diadakan oleh Institut Teknologi Kalimantan",
            date: "20 Sep 2024",
            image: "img/poster.jpeg",
            label: "Lomba",
        },
    ];

    return (
        <div>
            {/* Background Image */}
            

            {/* Informasi Lomba */}
            <div className="w-full flex flex-col gap-6 mb-12 relative z-10">
                <div className="w-full px-16 flex justify-between items-center">
                    <h1 className="text-black text-2xl font-semibold">Informasi Lomba</h1>
                    <a href="/lomba" className="text-orange-500 text-base font-normal text-right">Lihat Semua</a>
                </div>

                <div className="w-full px-16 flex gap-6 overflow-x-auto">
                    {competitions.map((competition, index) => (
                        <div
                            key={index}
                            className="w-[343px] h-[308px] p-4 bg-white rounded-xl border border-neutral-200 shadow-lg flex flex-col gap-2"
                        >
                            <div
                                className="w-full h-44 bg-gray-300 rounded-xl relative bg-cover bg-center"
                                style={{ backgroundImage: `url(${competition.image})` }}
                            >
                                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                    {competition.label}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-lg font-medium">{competition.title}</h2>
                                <p className="text-gray-500 text-sm">{competition.description}</p>
                                <div className="flex items-center gap-2">
                                    <img src="img/waktu.png" alt="Jam" className="w-4 h-4 object-contain" />
                                    <span className="text-orange-500 text-xs font-medium leading-tight">{competition.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col gap-6 mb-12 relative z-10">
                <div className="w-full px-16 flex gap-6 overflow-x-auto">
                    {competitions.map((competition, index) => (
                        <div
                            key={index}
                            className="w-[343px] h-[308px] p-4 bg-white rounded-xl border border-neutral-200 shadow-lg flex flex-col gap-2"
                        >
                            <div
                                className="w-full h-44 bg-gray-300 rounded-xl relative bg-cover bg-center"
                                style={{ backgroundImage: `url(${competition.image})` }}
                            >
                                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                    {competition.label}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-black text-lg font-medium">{competition.title}</h2>
                                <p className="text-gray-500 text-sm">{competition.description}</p>
                                <div className="flex items-center gap-2">
                                    <img src="img/waktu.png" alt="Jam" className="w-4 h-4 object-contain" />
                                    <span className="text-orange-500 text-xs font-medium leading-tight">{competition.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardPenelitian;
