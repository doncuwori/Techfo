const ProfileSection = () => {
    return (
        <div className="flex flex-col items-start gap-6 py-8 px-8 w-full">
            <div className="flex items-center gap-8 w-full">
                <img
                    className="w-44 h-44 rounded-full"
                    src="/img/profile.png"
                    alt="Profile"
                />
                <div className="flex flex-grow gap-6 bg-white border border-[#d1d3d8] rounded-lg">
                    {/* Labels Column */}
                    <div className="min-w-[180px] bg-orange-100 rounded-tl-lg rounded-bl-lg px-4 py-3">
                        {["NIM", "Nama", "Program Studi", "Angkatan"].map(
                            (label) => (
                                <div key={label} className="py-2">
                                    <div className="text-[#2d3036] text-sm font-semibold">
                                        {label}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    {/* Values Column */}
                    <div className="flex-grow px-4 py-3">
                        {[
                            "2110512020",
                            "Khaliza Fania",
                            "S1 Sistem Informasi",
                            "2021",
                        ].map((value) => (
                            <div key={value} className="py-2">
                                <div className="text-[#2d3036] text-sm font-normal">
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
