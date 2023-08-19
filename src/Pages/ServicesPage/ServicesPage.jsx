import PageCover from "../../Components/PageCover";
import UltraTest from "./ServiceComponents.jsx/UltraTest";
import Xray from "./ServiceComponents.jsx/Xray";


const ServicesPage = () => {
    return (
        <div>
            <PageCover pageName={'Services'} />
            <Xray />
            <UltraTest />


        </div>
    );
};

export default ServicesPage;