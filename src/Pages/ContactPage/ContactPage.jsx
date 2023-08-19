import PageCover from "../../Components/PageCover";
import ContactForm from "../HomePage/HomeComponents/ContactForm";
import CTAContact from "./CTAContact";
import ContactBanner from "./ContactComponent/ContactBanner";


const ContactPage = () => {
    return (
        <div>
            <PageCover pageName={'Contact Us'} />
            <ContactBanner />
            <ContactForm />
            <CTAContact />
        </div>
    );
};

export default ContactPage;