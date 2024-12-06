import { usePage } from "@inertiajs/react";
import React from "react";

export const BiodataUser = () => {
    const user = usePage().props.auth.user;
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Biodata Mahasiswa</h2>
            <div className="grow shrink basis-0 h-[165px] bg-white rounded-lg border border-[#d1d3d8] justify-start items-center flex">
                <div className="w-[179px] self-stretch px-4 bg-orange-50 rounded-tl-lg rounded-bl-lg flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-semibold leading-tight">
                            NIM
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-semibold leading-tight">
                            Nama
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-semibold leading-tight">
                            Program Studi
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-semibold leading-tight">
                            Angkatan
                        </div>
                    </div>
                </div>
                <div className="w-[500px] self-stretch px-4 rounded-md flex-col justify-start items-start inline-flex">
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-normal leading-tight">
                            {user.nim}
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-normal leading-tight">
                            {user.name}
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-normal leading-tight">
                            {user.prodi}
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 py-3 justify-start items-center gap-2 inline-flex">
                        <div className="text-[#2d3036] text-sm font-normal leading-tight">
                            {user.angkatan}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};