import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`bg-white shadow-lg p-8 border-b border-gray-300 ${
                isOpen ? "rounded-xl" : "rounded-xl"
            }`}
        >
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleDropdown}
            >
                <h3 className="text-2xl font-semibold text-black">{title}</h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <ul className="list-decimal mt-6 ml-6 space-y-6">{children}</ul>
            )}
        </div>
    );
};

export default Dropdown;
