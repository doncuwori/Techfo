import React from 'react';

const Footer = () => {
    return (
        <div className="w-full max-w-[1917px] h-[350px] px-8 pt-8 pb-16 bg-Background-Default-Default border-t border-Border-Default-Default flex justify-center items-start gap-[200px]">
            {/* Column 1 */}
            <div className="w-[262px] h-[83px] flex flex-col justify-end gap-6 mt-20">
                {/* Logo */}
                <div className="flex justify-start items-left px-14">
                    <img src="img/logofigma.png" alt="Icon 1" className="w-7 h-8" />
                </div>
                {/* Social Icons */}
                <div className="flex justify-center items-center gap-4">
                    <img src="img/logox.png" alt="Icon 2" className="w-6 h-6" />
                    <img src="img/logoinstagram.png" alt="Icon 3" className="w-6 h-6" />
                    <img src="img/logoyt.png" alt="Icon 4" className="w-7 h-6" />
                    <img src="img/logolinkedin.png" alt="Icon 5" className="w-6 h-6" />
                </div>
            </div>

            {/* Column 2: Use Cases */}
            <div className="w-[262px] flex flex-col gap-4">
                <div className="self-stretch h-[38px] pb-4 flex items-start">
                    <div className="text-Text-Default-Default text-base font-semibold leading-snug">Use cases</div>
                </div>
                <div className="flex flex-col gap-2">
                    {["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard", "Team collaboration"].map((item, index) => (
                        <div key={index} className="w-[89px] h-[22px] flex items-center">
                            <div className="text-Text-Default-Default text-base font-normal leading-snug whitespace-nowrap">{item}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 3: Explore */}
            <div className="w-[262px] flex flex-col gap-3">
                <div className="self-stretch h-[38px] pb-4 flex items-start">
                    <div className="text-Text-Default-Default text-base font-semibold leading-snug">Explore</div>
                </div>
                <div className="flex flex-col gap-2">
                    {["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process", "FigJam"].map((item, index) => (
                        <div key={index} className="w-[89px] h-[22px] flex items-center">
                            <div className="text-Text-Default-Default text-base font-normal leading-snug whitespace-nowrap">{item}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Column 4: Resources */}
            <div className="w-[262px] flex flex-col gap-3">
                <div className="self-stretch h-[38px] pb-4 flex items-start">
                    <div className="text-Text-Default-Default text-base font-semibold leading-snug">Resources</div>
                </div>
                <div className="flex flex-col gap-2">
                    {["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers", "Resource library"].map((item, index) => (
                        <div key={index} className="w-[89px] h-[22px] flex items-center">
                            <div className="text-Text-Default-Default text-base font-normal leading-snug whitespace-nowrap">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
