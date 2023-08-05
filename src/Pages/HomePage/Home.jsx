import Contacts from "./HomeComponents/Contacts";
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
            
        </div>
    );
};

export default Home;