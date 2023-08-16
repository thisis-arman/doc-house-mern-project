import PageCover from "../../Components/PageCover";
import DoctorBanner from "./DoctorBanner";
import RegisterAsDoctor from "./RegisterAsDoctor";
import Stats from "./Stats";


const BecomeDoctor = () => {
    return (
        <div>
            <PageCover pageName="Join As Doctor" />
            <DoctorBanner />
            <Stats />
            <RegisterAsDoctor />





        </div>
    );
};

export default BecomeDoctor;