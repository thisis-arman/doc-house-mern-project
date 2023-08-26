import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Announcement from "../Shared/Announcement";

const Main = () => {
    return (
        <div>
            {/* <Announcement /> */}
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;