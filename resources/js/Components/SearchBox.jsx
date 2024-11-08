import { Search } from "lucide-react";
import React from "react";

const SearchBox = () => {
    return (
        <div className="w-full max-w-4xl mx-auto relative z-10">
            {/* focus-within:ring-2 focus-within:ring-indigo-500 */}
            <div className="flex rounded-lg">
                <div className="flex-grow px-2 py-2 bg-white rounded-tl-lg rounded-bl-lg border border-neutral-300 flex items-center ">
                    <input
                        type="text"
                        placeholder="Cari informasi lomba, beasiswa, pengabdian masyarakat, dan penelitian..."
                        className="w-full px-2 py-1 text-gray-700 placeholder-gray-400 border-none rounded-tl-lg rounded-bl-lg focus:outline-none focus:ring-0 focus:border-transparent"
                    />
                </div>
                <button className="w-12 bg-white rounded-tr-lg rounded-br-lg border border-neutral-300 flex items-center justify-center hover:bg-gray-200 transition-all duration-200">
                    <Search
                        size={22}
                        color="grey"
                        className="hover:font-bold hover:scale-110 transition-transform duration-105"
                    />
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
