

const DoctorBanner = () => {
    return (
        <div className="container mx-auto">
            <section className="text-gray-600 body-font mt-44">
                <div className="container mx-auto flex px-5 md:pt-24 md:flex-row gap-8 flex-col-reverse justify-center items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium `   text-gray-900">Join As Doctor
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <button id="register-doctor" className="inline-flex text-white bg-green-500 border-0 py-2 px-12 focus:outline-none hover:bg-green-600 rounded text-lg">Join</button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 hidden md:block w-5/6">
                        <img className="object-cover object-center w-2/3 rounded" alt="hero" src="https://i.ibb.co/7Vr71td/wepik-export-20230815142021l1hs.png" />
                    </div>
                </div>
            </section >


        </div >
    );
};

export default DoctorBanner;