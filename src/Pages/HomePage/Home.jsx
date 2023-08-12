import Awards from "./HomeComponents/Awards";
import BlogCTA from "./HomeComponents/BlogCTA";
import ContactForm from "./HomeComponents/ContactForm";
import Contacts from "./HomeComponents/Contacts";
import Editor from "./HomeComponents/Editor";
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
            <Awards/>
            <BlogCTA/>
            <ContactForm/>
            
        </div>
    );
};

export default Home;