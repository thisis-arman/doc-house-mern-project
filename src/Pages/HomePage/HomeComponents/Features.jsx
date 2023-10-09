import { useEffect } from "react";
import { FaCalendar, FaHome, FaLaptop, FaUsers } from "react-icons/fa";
import 'aos/dist/aos.css';
import Aos from "aos";

const Features = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])
    return (
        <section className="container mx-auto px-6  relative md:top-[750px] top-[450px] mb-44 ">
            <div className="md:flex items-start justify-center gap-10">
                <div className="md:w-1/2">
                    <img src="https://skinive.com/wp-content/uploads/2023/02/key-features-item-one-image_big.png" alt="" />
                </div>
                <div className="md:w-1/2 items-start">
                    <h2 className="sm:text-7xl text-5xl font-bold py-12">Key Feature</h2>
                    <div>
                        <div data-aos="fade-up" data-aos-delay="100" className="flex gap-6 py-6 items-center">
                            <FaHome className="min-w-min h-12 rounded-md p-2  bg-red-500 text-white" />
                            <p className="text-xl">Get Services from hope,consult with doctor from home.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="150" className="flex py-8 gap-6 items-center">
                            <FaCalendar className="min-w-min h-12 rounded-md p-2  bg-red-500 text-white" />
                            <p className="text-xl">Book Appointment and take prescription from your world's best Doctor</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200" className="flex py-6 gap-6 items-center">
                            <FaLaptop className="min-w-min h-12 rounded-md p-2  bg-red-500 text-white" />
                            <p className="text-xl">You can get connected with doctor from anywhere and when ever you want </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;