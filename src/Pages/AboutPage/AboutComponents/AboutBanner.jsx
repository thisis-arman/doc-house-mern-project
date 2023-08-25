

const AboutBanner = () => {
    return (
        <div className="border-b">
            <section className="relative md:mt-56">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 sm:px-6 lg:py-16 lg:px-8"
                >
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div
                            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                        >
                            <img
                                alt="Party"
                                src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?w=900&t=st=1692290078~exp=1692290678~hmac=ff5988950f0466c261228f6a0fd2eccf7c2c485503d5494c8ef59d3075e1a885"
                                className="absolute inset-0 h-full w-full object-cover"
                            />


                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-5xl">Your Health, Our Priority.</h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                                veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutBanner;