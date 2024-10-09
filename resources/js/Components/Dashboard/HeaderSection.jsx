import React from 'react';

const HeaderSection = () => {
    return (
        <div>
            {/* Background Image Section */}
            <div className="absolute inset-0 z-0 flex justify-center mt-16">
                <img
                    src="img/bgdashboard1.png"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[370px] rounded-md"
                />
            </div>
            {/* Text Section */}
            <div className="w-full px-4 md:px-10 py-6 mt-10 relative z-10">
                <div className="text-center mb-6">
                    <span className="text-black text-4xl font-medium leading-10">Eksplor Informasi </span>
                    <span className="text-[#fe632e] text-4xl font-medium leading-10">Lomba, Beasiswa, Pengabdian Masyarakat, </span>
                    <span className="text-black text-4xl font-medium leading-10">dan </span>
                    <br />
                    <span className="text-[#fe632e] text-4xl font-medium leading-10">Penelitian</span>
                    <span className="text-black text-4xl font-medium leading-10"> Sekarang!</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
