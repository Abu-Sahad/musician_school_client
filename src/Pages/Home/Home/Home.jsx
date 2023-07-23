import AboutOurSchool from "../AboutOurSchool/AboutOurSchool";
import Banner from "../Banner/Banner";
import Instructor from "../Instructor/Instructor";
import PopularClassSection from "../PopularClassSection/PopularClassSection";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClassSection></PopularClassSection>
            <h1 className="mt-8 mb-10 text-[#3498DB] text-center text-5xl font-bold">Popular Instructor</h1>
            <Instructor ></Instructor>
            <AboutOurSchool></AboutOurSchool>
        </div>
    );
};

export default Home;