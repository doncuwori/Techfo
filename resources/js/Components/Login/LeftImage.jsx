import React from 'react';

const LeftImage = () => {
    return (
        <div className="w-1/2 h-full relative">
            {/* Background Image */}
            <img
                className="w-full h-full object-cover"
                src="/img/fik.png"
                alt="Background"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2d3036]/30"></div>

            {/* Logo and Text Positioned Above the Image */}
            <div className="absolute top-0 left-0 p-12 flex items-center gap-4 z-10">
                <img
                    className="w-16 h-16"
                    src="/img/upn.png"
                    alt="UPN Logo"
                />
                <div className="text-[#fcfcfc] text-2xl font-bold">
                    FAKULTAS ILMU KOMPUTER
                    <br />
                    UPN VETERAN JAKARTA
                </div>
            </div>
        </div>
    );
};

export default LeftImage;