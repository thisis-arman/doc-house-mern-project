// import AOS from 'aos';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import { AiFillPlayCircle } from 'react-icons/ai'

import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Empowering Health,', 'Enriching Lives,', 'Transforming Lives,'];

const HeroSection = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])

  return (
    <div className=" overflow-hidden min-h-screen z-0 absolute w-full top-0 ">
      <section className="text-black body-font ">
        <div className="container mx-auto flex px-5 md:pt-24  pt-32  md:flex-row flex-col items-center">
          <div data-aos="fade-left" data-aos-delay="800" className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 mt-20 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl lg:text-6xl text-5xl mb-4 font-extrabold ">
              {/* <TextTransition className='text-lime-400 text-center  text-2xl md:text-5xl ml-7 md:ml-0 ' springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
              Your Journey to Wellness Begins Here
            </h1>

            <motion.p animate={{}} className="mb-8  md:text-md text-sm ">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</motion.p>
            <div className="md:flex justify-center gap-4">
              <motion.button whileHover={{ scale: 1.1 }} className="inline-flex text-white bg-[#F75005] border-0 py-6 px-12  focus:outline-none  rounded-full  shadow-xl shadow-[#d9a891] text-xl uppercase">All Services</motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className=" text-[#F75005] border-0 py-4 px-12  focus:outline-none  rounded-full text-xl uppercase md:flex hidden items-center gap-2  "><AiFillPlayCircle className='text-red-400 w-10 h-10   border-4 hover:border-8 rounded-full' /> <span>
                Watch Video</span></motion.button>
              {/* <button className="ml-4 inline-flex  text-gray-700 bg-gray-100 border-0 py-4 px-12  focus:outline-none hover:bg-gray-200 rounded text-lg"></button> */}
            </div>
            <div className='md:flex gap-4 mt-4 hidden'>
              <div className='p-10 mt-6 rounded-3xl bg-white border shadow-2xl shadow-[#F5F5F5]'>
                <h2 className='text-5xl font-extrabold'>120k+ </h2>
                <p>Satisfied patient</p>

              </div>
              <div className='p-10 mt-6 rounded-3xl bg-white border shadow-2xl shadow-[#F5F5F5]'>
                <h2 className='text-5xl font-extrabold'>4.74 </h2>
                <p>Average rating</p>

              </div>
            </div>
          </div>

          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
          <div


            data-aos="fade-right" data-aos-delay="1500" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">




            <img className="object-cover object-center hidden md:block rounded" alt="hero" src="https://i.ibb.co/VQ1MkTt/hero-image.png" />
          </div>
        </div>

      </section>


    </div>
  );
};

export default HeroSection;