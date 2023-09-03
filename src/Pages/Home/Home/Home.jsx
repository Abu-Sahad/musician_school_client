import AboutMusicSchool from "../AboutMusicSchool/AboutMusicSchool";
import AboutOurSchool from "../AboutOurSchool/AboutOurSchool";
import Banner from "../Banner/Banner";
import ChooseInstrument from "../ChooseInstrument/ChooseInstrument";
import Instructor from "../Instructor/Instructor";
import MusicClassesItem from "../MusicClassesItem/MusicClassesItem";
import MusicGroup from "../MusicGroup/MusicGroup";
import PopularClassSection from "../PopularClassSection/PopularClassSection";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMusicSchool></AboutMusicSchool>
            <MusicGroup></MusicGroup>
            <PopularClassSection></PopularClassSection>
            <h4 className=" mt-8 text-center text-2xl font-bold text-red-500">Our Instructor</h4>
            <h1 className="mt-2 mb-10 text-[#3498DB] text-center text-5xl font-bold">Popular Instructor</h1>
            <Instructor ></Instructor>
            <ChooseInstrument></ChooseInstrument>
            <AboutOurSchool></AboutOurSchool>
            <MusicClassesItem></MusicClassesItem>
        </div>
    );
};

export default Home;