
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const YearsOfJourney = () => {


    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])


    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto md:flex items-center gap-6 ">
                    <div className="flex md:w-1/2 mb-20 flex-wrap">
                        <h1 className="sm:text-5xl text-2xl font-medium title-font text-gray-900  lg:mb-0 mb-4">We've been here <br /> almost 17 Years</h1>
                        <p className="  mx-auto leading-relaxed text-base py-4">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div>

                    <div className="flex flex-wrap md:w-1/2 md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div data-aos="fade-left" data-aos-delay="700" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full border shadow object-center block" src="https://i.ibb.co/NKnSFVB/doctor-5.png" />
                            </div>
                            <div data-aos="fade-right" data-aos-delay="400" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full border shadow object-center block" src="https://i.ibb.co/T2cmY4D/doctor-6.png" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600" className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover border shadow object-center block" src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?w=900&t=st=1692290078~exp=1692290678~hmac=ff5988950f0466c261228f6a0fd2eccf7c2c485503d5494c8ef59d3075e1a885" />
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="800" className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover border shadow object-center block" src="https://i.ibb.co/VQ1MkTt/hero-image.png" />
                            </div>
                            <div data-aos="fade-in" data-aos-delay="600" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full border shadow object-cover h-full object-center block" src="https://i.ibb.co/q0VFGKt/doctor-1.png" />
                            </div>
                            <div data-aos="zoom-out" data-aos-delay="1000" className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover border shadow h-full object-center block" src="https://i.ibb.co/k8TRn32/wepik-export-20230818153106-SNb-F.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default YearsOfJourney;