

const HeroSection = () => {
    return (
        <div className="bg-[#07332F] md:h-screen z-0 absolute w-full top-0">
            <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24   md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium ">Your Best Medical 
        <br className="hidden lg:inline-block" /> Help Center
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">All Services</button>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center hidden md:block rounded" alt="hero" src="https://i.ibb.co/VQ1MkTt/hero-image.png" />
    </div>
  </div>
</section>

            
        </div>
    );
};

export default HeroSection;