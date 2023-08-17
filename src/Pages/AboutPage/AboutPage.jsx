import PageCover from "../../Components/PageCover";
import AboutBanner from "./AboutComponents/AboutBanner";


const AboutPage = () => {
    return (
        <div>
            <PageCover pageName={"About"} />
            <AboutBanner />

        </div>
    );
};

export default AboutPage;