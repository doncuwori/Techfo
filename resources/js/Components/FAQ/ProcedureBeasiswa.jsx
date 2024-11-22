import React from "react";
import Dropdown from "@/Components/FAQ/Dropdown";
import Step from "@/Components/FAQ/Step";

const ProcedureBeasiswa = () => {
    return (
        <div className="container max-w-5xl mx-auto px-8 py-8 relative z-10">
            <div className="text-left">
                <h3 className="text-2xl font-bold text-black">
                    Prosedur <span className="text-[#fe632e]">Beasiswa</span>
                </h3>
            </div>

            <div className="mt-4 relative z-10">
                <Dropdown title="Prosedur Pendaftaran Beasiswa">
                    <Step
                        stepNumber="1"
                        title="Pilih Beasiswa yang ingin diikuti"
                        description="Pilih Beasiswa sesuai minat dan bakat Anda. Untuk informasi Beasiswa terbaru, klik"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="2"
                        title="Pilih dan hubungi dosen pembimbing"
                        description="Hubungi dosen sesuai dengan topik Beasiswa. Lihat informasi dosen pembimbing"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="3"
                        title="Daftarkan diri ke Beasiswa"
                        description="Daftarkan diri atau tim ke Beasiswa yang diinginkan. Semangat dan semoga berhasil!"
                    />
                    <Step
                        stepNumber="4"
                        title="Melakukan pendataan fakultas"
                        description="Lakukan pendataan fakultas untuk mencatat partisipasi Beasiswa. Klik"
                        linkText="link ini"
                        linkUrl="#"
                    />
                </Dropdown>

                <Dropdown title="Prosedur Pendataan Penerima Beasiswa">
                    <Step
                        stepNumber="1"
                        title="Pilih Beasiswa yang ingin diikuti"
                        description="Pilih Beasiswa sesuai minat dan bakat Anda. Untuk informasi Beasiswa terbaru, klik"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="2"
                        title="Pilih dan hubungi dosen pembimbing"
                        description="Hubungi dosen sesuai dengan topik Beasiswa. Lihat informasi dosen pembimbing"
                        linkText="di sini"
                        linkUrl="#"
                    />
                    <Step
                        stepNumber="3"
                        title="Daftarkan diri ke Beasiswa"
                        description="Daftarkan diri atau tim ke Beasiswa yang diinginkan. Semangat dan semoga berhasil!"
                    />
                    <Step
                        stepNumber="4"
                        title="Melakukan pendataan fakultas"
                        description="Lakukan pendataan fakultas untuk mencatat partisipasi Beasiswa. Klik"
                        linkText="link ini"
                        linkUrl="#"
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export default ProcedureBeasiswa;
