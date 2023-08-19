import PageCover from "../../Components/PageCover";
import MRITest from "./ServiceComponents.jsx/MRITest";
import UltraTest from "./ServiceComponents.jsx/UltraTest";
import Xray from "./ServiceComponents.jsx/Xray";


const ServicesPage = () => {
    return (
        <div>
            <PageCover pageName={'Services'} />
            <Xray />
            <UltraTest />
            <MRITest />


        </div>
    );
};

export default ServicesPage;