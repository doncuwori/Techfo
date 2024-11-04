import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import HeaderSection from "@/Components/HeaderSection";
import SearchBox from "@/Components/SearchBox";
import Procedure from "@/Components/Lomba/ProcedureLomba";
import CardLomba from "@/Components/Lomba/CardLomba";

const Lomba = () => {
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
            <HeaderSection />
            <SearchBox />
            <Procedure />
            <div className="absolute inset-x-0 mt-6 z-0 flex justify-center">
                <img
                    src="img/bgdashboard2.png"
                    alt="Deskripsi gambar"
                    className="w-full max-h-[500px] rounded-md"
                />
            </div>
            <CardLomba />
            <Footer />
        </div>
    );
};

export default Lomba;
