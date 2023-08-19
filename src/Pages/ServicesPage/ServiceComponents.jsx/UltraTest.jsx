

const UltraTest = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Ultrasonography
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed">Ultrasonography, or ultrasound, employs high-frequency sound waves to create real-time images of internal body structures. It's widely used in medicine for non-invasive imaging of organs, pregnancies, and blood flow. It helps diagnose conditions, guide procedures, and monitor fetal development. <br /><br /> Ultrasound's safety, real-time imaging, and versatility make it valuable in various medical fields. However, its effectiveness might vary based on factors like body composition. Overall, ultrasonography is a crucial diagnostic tool offering insights without radiation exposure, playing a pivotal role in healthcare by aiding in accurate diagnosis, monitoring, and interventions.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-12 focus:outline-none hover:bg-green-600 rounded text-lg">Book for Test</button>

                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/gynecologist-performing-ultrasound-consultation_23-2149353022.jpg?w=900&t=st=1692464118~exp=1692464718~hmac=a18ae92959a6c9e183fe26ebff040aaa3c4cb5313f0f8fff06d08a3cc77cb7c3" />
                    </div>
                </div>
            </section>


        </div>
    );
};

export default UltraTest;