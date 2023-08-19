

const Xray = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative md:top-60 md:mb-44">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/high-angle-ct-scan-machine-room_23-2149341486.jpg?w=900&t=st=1692463727~exp=1692464327~hmac=72bfe7383ea06710c3e7564b57e209288cc16c8f98b278efb013a6d89acfdebb" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">X-Ray Test
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            X-rays are crucial for medical imaging, revealing internal structures. They aid in diagnosing conditions, detecting fractures, and guiding procedures. In security, X-ray scanners help screen luggage and packages. In industry, they ensure material quality and identify defects. X-rays also advance research by uncovering atomic structures and aid in art restoration. <br /> <br /> They're vital in non-destructive testing, cancer treatment, and astronomy, revealing high-energy cosmic phenomena. However, excessive exposure poses health risks. In essence, X-rays revolutionize medicine, industry, research, and security, but their controlled use is vital due to potential hazards.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">Book For Test</button>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Xray;