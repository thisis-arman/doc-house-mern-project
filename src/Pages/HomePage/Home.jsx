import Awards from "./HomeComponents/Awards";
import BlogCTA from "./HomeComponents/BlogCTA";
import CaseStudies from "./HomeComponents/CaseStudies";
import ContactForm from "./HomeComponents/ContactForm";
import Contacts from "./HomeComponents/Contacts";
import Editor from "./HomeComponents/Editor";
import ExpertDoctors from "./HomeComponents/ExpertDoctors";
import HeroSection from "./HomeComponents/HeroSection";
import OurServices from "./HomeComponents/OurServices";
import Testimonials from "./HomeComponents/Testimonials";
import Video from "./HomeComponents/Video";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Video />
            <OurServices />
            <Contacts />
            <ExpertDoctors />
            <CaseStudies />
            <Testimonials />
            <Awards />
            <BlogCTA />
            <ContactForm />

        </div>
    );
};

export default Home;