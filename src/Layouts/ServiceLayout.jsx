import { Outlet } from "react-router-dom";
import AppointmentPage from "../Pages/AppointmentPage/AppointmentPage";


const ServiceLayout = () => {
    return (
        <div>
            <AppointmentPage/>
            <Outlet/>
            
        </div>
    );
};

export default ServiceLayout;