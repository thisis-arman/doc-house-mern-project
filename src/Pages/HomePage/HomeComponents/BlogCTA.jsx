// import  motion  from "framer-motion";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BlogCTA = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [])
  return (
    <div>
      <section className='overflow-hidden'>
        <div
          className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div data-aos="fade-left" data-aos-delay="500"
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
            >

              <img
                alt="blogs"
                src="https://img.freepik.com/free-photo/overhead-view-laptop-stethoscope-medical-uniform-green-backdrop_23-2148129641.jpg?w=900&t=st=1691816589~exp=1691817189~hmac=3ee8d43b6d36fae8e271656086df2360516b9489836aafc2fde945fd9fe1a80b"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div data-aos="fade-right" data-aos-delay="600" className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Learn and Explore About your Health</h2>

              <p className="mt-4 text-gray-600">
                Discover a wealth of information to enhance your well-being. Explore tips for maintaining physical fitness through exercise and balanced nutrition. Learn strategies for nurturing your mental health, from mindfulness to stress management.  <br /> <br /> Stay informed about the importance of preventive screenings, vaccinations, and fostering positive social connections. Our articles cover heart and cancer health, along with advice on avoiding harmful habits. Trust us for expert insights on your journey to a healthier life."
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Explore Blogs
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogCTA;