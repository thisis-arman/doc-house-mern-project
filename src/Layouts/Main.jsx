import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
// import ThemeToggle from "../Components/Theme/ThemeToggle";


const Main = () => {
    return (
        <div>
            {/* <div className={`bg-${isDarkMode ? 'dark' : 'white'} text-${isDarkMode ? 'white' : 'black'} min-h-screen p-4`}> */}
            {/* <ThemeToggle /> */}
            {/* <Announcement /> */}
            <Navbar />
            <Outlet />
            <Footer />

        </div>
        // </div>
    );
};

export default Main;