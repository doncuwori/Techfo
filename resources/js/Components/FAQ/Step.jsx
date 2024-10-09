import React from "react";

const Step = ({ stepNumber, title, description, linkText, linkUrl }) => {
    return (
        <li className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {stepNumber}
            </div>
            <div className="ml-4">
                <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
                <p className="text-gray-600">
                    {description}{" "}
                    {linkText && (
                        <a href={linkUrl} className="text-blue-500 underline">
                            {linkText}
                        </a>
                    )}
                </p>
            </div>
        </li>
    );
};

export default Step;
