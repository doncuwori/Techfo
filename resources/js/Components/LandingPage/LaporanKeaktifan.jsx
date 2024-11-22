import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
} from "chart.js";

// Registering the required Chart.js components
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title
);

const LaporanKeaktifan = () => {
    const pieData = {
        labels: [
            "S-1 Informatika",
            "S-1 Sistem Informasi",
            "D-3 Sistem Informasi",
            "S-1 Sains Data",
        ],
        datasets: [
            {
                label: "Program Studi",
                data: [25, 40, 20, 15],
                backgroundColor: ["#356a33", "#58b055", "#81cd7d", "#b6e2b4"],
                hoverOffset: 4,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        plugins: {
            legend: { position: "right" },
            tooltip: {
                callbacks: {
                    label: ({ label, raw }) => `${label}: ${raw}%`,
                },
            },
        },
    };

    const barData = {
        labels: [
            "S-1 Informatika",
            "S-1 Sistem Informasi",
            "D-3 Sistem Informasi",
            "S-1 Sains Data",
        ],
        datasets: [
            {
                label: "Program Studi",
                data: [25, 30, 20, 15],
                backgroundColor: ["#356a33", "#58b055", "#95d592", "#ceeccd"],
                borderRadius: 10,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: { boxWidth: 0, padding: 10 },
            },
            tooltip: {
                callbacks: {
                    label: ({ label, raw }) => `${label}: ${raw} siswa`,
                },
            },
        },
        scales: {
            x: { ticks: { font: { size: 12 } } },
            y: { beginAtZero: true, ticks: { stepSize: 5 } },
        },
    };

    const lineData = {
        labels: [
            "S-1 Informatika",
            "S-1 Sistem Informasi",
            "D-3 Sistem Informasi",
            "S-1 Sains Data",
        ],
        datasets: [
            {
                label: "Prestasi Lomba Mahasiswa",
                data: [5, 15, 10, 20],
                fill: false,
                borderColor: "#eca00c",
                tension: 0.4,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    boxWidth: 0,
                    padding: 10,
                },
            },
            tooltip: { mode: "index", intersect: false },
        },
        scales: {
            x: { title: { display: true, text: "Jurusan" } },
            y: {
                title: { display: true, text: "Jumlah Prestasi" },
                min: 0,
                ticks: {
                    stepSize: 5,
                },
            },
        },
    };

    const rekapLombaData = {
        labels: [
            "Juara 1",
            "Juara 2",
            "Juara 3",
            "Juara Umum",
            "Juara Favorit",
            "Juara Harapan",
            "Lainnya",
        ],
        datasets: [
            {
                label: "Jumlah Prestasi",
                data: [90, 157, 60, 35, 50, 20, 10], // Example data
                backgroundColor: [
                    "#b44621",
                    "#fe632e",
                    "#fe9673",
                    "#ffcfbe",
                    "#81cd7d",
                    "#58b055",
                    "#356a33",
                ],
                borderRadius: 5,
            },
        ],
    };

    const rekapLombaOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { mode: "index", intersect: false },
        },
        scales: {
            x: { title: { display: true, text: "Kategori Juara" } },
            y: {
                beginAtZero: true,
                title: { display: true, text: "Jumlah" },
                ticks: { stepSize: 20 }, // Adjust as needed
            },
        },
    };

    return (
        <div>
            <main className="container mx-auto p-4 mb-20 mt-14 relative z-10">
                <div className="min-h-[360px] p-8 bg-white rounded-lg border-2 border-gray-300 shadow-lg flex flex-col gap-8">
                    <div className="w-full mt-6">
                        <h2 className="text-xl font-semibold">
                            Laporan Keaktifan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 pt-4 gap-6">
                            {[
                                { label: "LOMBA", icon: "🏆", count: "36/50" },
                                {
                                    label: "BEASISWA",
                                    icon: "📝",
                                    count: "36/50",
                                },
                                {
                                    label: "ABDIMAS",
                                    icon: "👥",
                                    count: "36/50",
                                },
                                {
                                    label: "PENELITIAN",
                                    icon: "🔍",
                                    count: "36/50",
                                },
                            ].map(({ label, icon, count }) => (
                                <div
                                    key={label}
                                    className="bg-orange-100 border-2 border-neutral-200 rounded-lg p-4 flex items-center"
                                >
                                    <div className="ml-4 text-5xl">{icon}</div>
                                    <div className="ml-10 text-center">
                                        <p className="font-semibold">{label}</p>
                                        <p className="text-[#2d3036] text-2xl font-medium leading-10">
                                            {count}
                                        </p>
                                        <p className="text-gray-600 text-xs">
                                            Daftar/Menang
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <h2 className="text-xl font-semibold text-left mb-4">
                            Rekap Juara Lomba
                        </h2>
                        <div className="p-4 bg-white rounded-lg border border-[#d1d3d8]">
                            <div className="flex items-end gap-6">
                                <div className="w-[19px] pb-9 flex flex-col items-center gap-8">
                                    {[25, 20, 15, 10, 5].map((num) => (
                                        <div
                                            key={num}
                                            className="self-stretch text-center text-gray-500 text-sm font-normal leading-tight"
                                        >
                                            {num}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex grow h-[185px] justify-center items-end gap-10">
                                    {[
                                        "Juara 1",
                                        "Juara 2",
                                        "Juara 3",
                                        "Juara Umum",
                                        "Juara Favorit",
                                        "Juara Harapan",
                                        "Lainnya",
                                    ].map((label) => (
                                        <div
                                            key={label}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            <div className="flex items-end gap-[5px]">
                                                <div className="w-6 h-[90px] bg-[#b44621] rounded-xl"></div>
                                                <div className="w-6 h-[157px] bg-[#fe632e] rounded-xl"></div>
                                                <div className="w-6 h-[60px] bg-[#fe9673] rounded-xl"></div>
                                                <div className="w-6 h-[35px] bg-[#ffcfbe] rounded-xl"></div>
                                            </div>
                                            <div className="text-center text-gray-500 text-sm font-normal leading-tight">
                                                {label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                        <div className="w-full">
                            <h2 className="text-xl font-semibold text-left mb-4">
                                Prestasi Lomba Mahasiswa
                            </h2>
                            <div className="h-96 p-4 bg-white rounded-lg border border-[#d1d3d8] relative">
                                <div className="w-full h-full flex justify-center items-center">
                                    <Pie data={pieData} options={pieOptions} />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="text-xl font-semibold text-left mb-4">
                                Penerima Beasiswa
                            </h2>
                            <div className="h-96 p-4 bg-white rounded-lg border border-[#d1d3d8] relative">
                                <div className="w-full h-full flex justify-center items-center">
                                    <Bar data={barData} options={barOptions} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mt-6">
                        <div className="w-full">
                            <h2 className="text-xl font-semibold text-left mb-4">
                                Mahasiswa Penelitian
                            </h2>
                            <div className="h-96 p-4 bg-white rounded-lg border border-[#d1d3d8] relative">
                                <div className="w-full h-full flex justify-center items-center">
                                    <Line
                                        data={lineData}
                                        options={lineOptions}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="text-xl font-semibold text-left mb-4">
                                Mahasiswa Pengabdian Masyarakat
                            </h2>
                            <div className="h-96 p-4 bg-white rounded-lg border border-[#d1d3d8] relative">
                                <div className="w-full h-full flex justify-center items-center">
                                    <Line
                                        data={lineData}
                                        options={lineOptions}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LaporanKeaktifan;
