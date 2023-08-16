import PageCover from "../../Components/PageCover";
import DoctorBanner from "./DoctorBanner";
import Guide from "./Guide";
import Process from "./Process";
import RegisterAsDoctor from "./RegisterAsDoctor";
import RulesReg from "./RulesReg";
import Stats from "./Stats";


const BecomeDoctor = () => {
    return (
        <div>
            <PageCover pageName="Join As Doctor" />
            <DoctorBanner />
            <Stats />
            <Guide />
            <Process />
            <RegisterAsDoctor />
            <RulesReg />





        </div>
    );
};

export default BecomeDoctor;