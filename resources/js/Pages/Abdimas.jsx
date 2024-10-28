import Navbar from "@/Components/Navbar";
import HeaderSection from "@/Components/HeaderSection";
import SearchBox from "@/Components/SearchBoxKegiatan";
import Procedure from "@/Components/Abdimas/ProcedureAbdimas";
import CardLomba from "@/Components/Abdimas/CardAbdimas";
import CardAbdimas from "@/Components/Abdimas/CardAbdimas";

const Abdimas = () => {
    return (
        <div>
            <Navbar />
            <div className="absolute inset-0 z-0 flex justify-center mt-16">
                <img
                    src="img/bglomba.png"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[750px] rounded-md"
                />
            </div>
            <HeaderSection pageType="abdimas" />
            <SearchBox />
            <Procedure />
            <div className="absolute inset-x-0 mt-6 z-0 flex justify-center">
                <img
                    src="img/bgdashboard2.png"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[500px] rounded-md"
                />
            </div>
            <CardAbdimas />
        </div>
    );
};

export default Abdimas;