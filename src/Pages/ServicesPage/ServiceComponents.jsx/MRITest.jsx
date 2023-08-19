

const MRITest = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?w=900&t=st=1692464355~exp=1692464955~hmac=7fdd99627de646c50d0c99b2691d7f11c89932f396f3c019a9efa7ac4bd73a93" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">MRI - Magnetic Resonance Imaging
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">MRI is a non-invasive medical imaging technique that uses powerful magnets and radio waves to create detailed images of internal structures. It excels in visualizing soft tissues, aiding in diagnosing conditions like tumors, neurological disorders, and joint injuries. <br /> <br /> MRI's safety, multi-plane imaging, and ability to track disease progression make it indispensable in healthcare. It's crucial for guiding procedures, studying brain functions, and researching medical mysteries. With no radiation exposure, MRI offers unparalleled insights into the body's intricacies, playing a pivotal role in accurate diagnosis, treatment planning, and scientific exploration.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Take You Seat</button>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default MRITest;