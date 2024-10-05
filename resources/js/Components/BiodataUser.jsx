import React from "react";

export const BiodataUser = () => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Biodata Mahasiswa</h2>
            {/* <div className="border p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold">NIM</p>
                        <p>2101520320</p>
                    </div>
                    <div>
                        <p className="font-bold">Program Studi</p>
                        <p>S1 Sistem Informasi</p>
                    </div>
                    <div>
                        <p className="font-bold">Nama</p>
                        <p>Khaliza Fania</p>
                    </div>
                    <div>
                        <p className="font-bold">Angkatan</p>
                        <p>2021</p>
                    </div>
                </div>
            </div> */}
            <div class="grow shrink basis-0 h-[165px] bg-white rounded-lg border border-[#d1d3d8] justify-start items-center flex">
                <div class="w-[179px] self-stretch px-4 bg-[#ffefea] rounded-tl-lg rounded-bl-lg flex-col justify-start items-start inline-flex">
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-semibold font-['Inter'] leading-tight">
                            NIM
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-semibold font-['Inter'] leading-tight">
                            Nama
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-semibold font-['Inter'] leading-tight">
                            Program Studi
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-semibold font-['Inter'] leading-tight">
                            Angkatan
                        </div>
                    </div>
                </div>
                <div class="w-[500px] self-stretch px-4 rounded-md flex-col justify-start items-start inline-flex">
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-normal font-['Inter'] leading-tight">
                            2110512020
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-normal font-['Inter'] leading-tight">
                            Khaliza Fania
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-normal font-['Inter'] leading-tight">
                            S1 Sistem Informasi
                        </div>
                    </div>
                    <div class="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div class="text-[#2d3036] text-sm font-normal font-['Inter'] leading-tight">
                            2021
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
