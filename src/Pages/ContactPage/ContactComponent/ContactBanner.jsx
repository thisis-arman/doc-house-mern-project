

const ContactBanner = () => {
    return (
        <div>
            <section className="bg-[#FEFEFE] body-font relative md:top-56 mb-44 ">
                <div className="container mx-auto flex px-5  md:px-24 py-24 md:flex-row flex-col items-center justify-center">
                    <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900">Contact With Us
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Us</button>

                        </div>
                    </div>
                    <div className=" md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?w=900&t=st=1692420975~exp=1692421575~hmac=bf73af3a372f60912be2e35eb37e1143198e8fa4fbd46bcd7fcab3ceb5c2c069" />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ContactBanner;