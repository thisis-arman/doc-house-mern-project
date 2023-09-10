// import AOS from 'aos';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
// import { AiFillPlayCircle } from 'react-icons/ai'

// import TextTransition, { presets } from 'react-text-transition';
import useAdmin from '../../../Hooks/useAdmin';
// import PopUp from '../../../Components/Popup';

// const TEXTS = ['Empowering Health,', 'Enriching Lives,', 'Transforming Lives,'];

const HeroSection = () => {


  const [isAdmin] = useAdmin()
  console.log(isAdmin, 'from Banner')

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])

  return (
    <div className=" overflow-hidden min-h-screen z-0 absolute w-full top-0   ">
      {/* <PopUp /> */}
      <section className=" text-black ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto min-w-5xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-green-600 bg-clip-text text-5xl font-extrabold text-transparent md:pt-16 md:text-7xl">
              Your Journey to Wellness
              <span className="sm:block"> Begins Here.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded border border-green-700 bg-green-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="/get-started">
                Get Started
              </a>
              <a className="block w-full rounded border border-green-700 px-12 py-3 text-sm font-medium text-black hover:text-white hover:bg-green-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="/about">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default HeroSection;