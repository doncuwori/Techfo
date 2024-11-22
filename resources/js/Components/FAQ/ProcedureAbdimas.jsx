import React from "react";
import Dropdown from "@/Components/FAQ/Dropdown";
import Step from "@/Components/FAQ/Step";

const ProcedureAbdimas = () => {
    return (
        <div className="container max-w-5xl mx-auto px-8 py-8 relative z-10">
            <div className="text-left">
                <h3 className="text-2xl font-bold text-black">
                    Prosedur <span className="text-[#fe632e]">Pengabdian Masyarakat</span>
                </h3>
            </div>

            <div className="mt-4">
                {/* Dropdown for Pendaftaran Pengabdian Masyarakat */}
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

                {/* Dropdown for Penerimaan Pengabdian Masyarakat */}
                <Dropdown title="Prosedur Penerimaan Pengabdian Masyarakat">
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

export default ProcedureAbdimas;
