import React from "react";
import Dropdown from "@/Components/FAQ/Dropdown";
import Step from "@/Components/FAQ/Step";

const PrdocedureAbdimas = () => {
    return (
        <div className="container max-w-5xl mx-auto px-4 py-8 relative z-10">
            <div className="text-left">
                <h3 className="text-2xl font-bold text-black">
                    Prosedur Pengabdian Masyarakat
                </h3>
            </div>

            <div className="mt-4 relative z-10">
                <Dropdown title="Prosedur Pendaftaran Pengabdian Masyarakat">
                    <Step
                        stepNumber="1"
                        title="Pilih Pengabdian Masyarakat yang ingin diikuti"
                        description="Pilih Pengabdian Masyarakat sesuai minat dan bakat Anda. Untuk informasi Pengabdian Masyarakat terbaru, klik"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="2"
                        title="Pilih dan hubungi dosen pembimbing"
                        description="Hubungi dosen sesuai dengan topik Pengabdian Masyarakat. Lihat informasi dosen pembimbing"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="3"
                        title="Daftarkan diri ke Pengabdian Masyarakat"
                        description="Daftarkan diri atau tim ke Pengabdian Masyarakat yang diinginkan. Semangat dan semoga berhasil!"
                    />
                    <Step
                        stepNumber="4"
                        title="Melakukan pendataan fakultas"
                        description="Lakukan pendataan fakultas untuk mencatat partisipasi Pengabdian Masyarakat. Klik"
                        linkText="link ini"
                        linkUrl="#"
                    />
                </Dropdown>

                <Dropdown title="Prosedur Pendataan Prestasi Pengabdian Masyarakat">
                    <Step
                        stepNumber="1"
                        title="Pilih Pengabdian Masyarakat yang ingin diikuti"
                        description="Pilih Pengabdian Masyarakat sesuai minat dan bakat Anda. Untuk informasi Pengabdian Masyarakat terbaru, klik"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="2"
                        title="Pilih dan hubungi dosen pembimbing"
                        description="Hubungi dosen sesuai dengan topik Pengabdian Masyarakat. Lihat informasi dosen pembimbing"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="3"
                        title="Daftarkan diri ke Pengabdian Masyarakat"
                        description="Daftarkan diri atau tim ke Pengabdian Masyarakat yang diinginkan. Semangat dan semoga berhasil!"
                    />
                    <Step
                        stepNumber="4"
                        title="Melakukan pendataan fakultas"
                        description="Lakukan pendataan fakultas untuk mencatat partisipasi Pengabdian Masyarakat. Klik"
                        linkText="link ini"
                        linkUrl="#"
                    />
                </Dropdown>

                <Dropdown title="Prosedur Pengajuan Reward Fakultas">
                    <Step
                        stepNumber="1"
                        title="Pilih Pengabdian Masyarakat yang ingin diikuti"
                        description="Pilih Pengabdian Masyarakat sesuai minat dan bakat Anda. Untuk informasi Pengabdian Masyarakat terbaru, klik"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="2"
                        title="Pilih dan hubungi dosen pembimbing"
                        description="Hubungi dosen sesuai dengan topik Pengabdian Masyarakat. Lihat informasi dosen pembimbing"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="3"
                        title="Daftarkan diri ke Pengabdian Masyarakat"
                        description="Daftarkan diri atau tim ke Pengabdian Masyarakat yang diinginkan. Semangat dan semoga berhasil!"
                    />
                    <Step
                        stepNumber="4"
                        title="Melakukan pendataan fakultas"
                        description="Lakukan pendataan fakultas untuk mencatat partisipasi Pengabdian Masyarakat. Klik"
                        linkText="link ini"
                        linkUrl="#"
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export default PrdocedureAbdimas;