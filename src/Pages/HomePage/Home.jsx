import Contacts from "./HomeComponents/Contacts";
import ExpertDoctors from "./HomeComponents/ExpertDoctors";
import HeroSection from "./HomeComponents/HeroSection";
import OurServices from "./HomeComponents/OurServices";
import Testimonials from "./HomeComponents/Testimonials";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <OurServices/>
            <Contacts/>
            <Testimonials/>
            <ExpertDoctors/>
            
        </div>
    );
};

export default Home;