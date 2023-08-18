import PageCover from "../../Components/PageCover";
import AboutBanner from "./AboutComponents/AboutBanner";
import AboutStats from "./AboutComponents/AboutStats";


const AboutPage = () => {
    return (
        <div>
            <PageCover pageName={"About"} />
            <AboutBanner />
            <AboutStats />
        </div>
    );
};

export default AboutPage;