import PageCover from "../../Components/PageCover";
import AboutBanner from "./AboutComponents/AboutBanner";
import AboutStats from "./AboutComponents/AboutStats";
import MissionSection from "./AboutComponents/MissionSection";


const AboutPage = () => {
    return (
        <div>
            <PageCover pageName={"About"} />
            <AboutBanner />
            <AboutStats />
            <MissionSection />
        </div>
    );
};

export default AboutPage;