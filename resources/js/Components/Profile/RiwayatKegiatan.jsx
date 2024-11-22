import { Clock4 } from "lucide-react";

const RiwayatKegiatan = () => {
    return (
        <div className="py-6 px-8 mb-6">
            <h2 className="text-2xl font-semibold mb-6">
                Riwayat Kegiatan Penelitian dan Pengabdian Masyarakat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="h-[159px] bg-white shadow-md rounded-lg border border-neutral-100 flex gap-4 p-4"
                    >
                        <div className="w-[125px] h-[127px] relative">
                            <img
                                src="/img/logobem.png"
                                alt="Deskripsi gambar"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-2xl">
                                {index === 2 ? "Penelitian" : "Abdimas"}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-2 w-full">
                            <div className="text-black text-lg font-medium">
                                INSPACE UI/UX
                            </div>
                            <div className="text-gray-500 text-sm font-normal leading-tight">
                                Perlombaan UI/UX Design Nasional diadakan oleh
                                Institut Teknologi Kalimantan
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock4 size={18} className="text-orange-500" />
                                <div className="text-orange-500 text-xs font-medium">
                                    20 Sep 2024
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RiwayatKegiatan;
