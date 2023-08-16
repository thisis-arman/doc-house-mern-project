

const RulesReg = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src="https://img.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg?w=900&t=st=1692203039~exp=1692203639~hmac=decf73361578838a703315f6376ddec307da0fb9ffd1111ed68e4cd7f546879e"
                                    className="absolute inset-0 h-full w-full  shadow-md object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <h2 className="text-2xl font-bold sm:text-3xl">
                                    Instructor rules & regulations
                                </h2>

                                <p className="mt-4 text-gray-600">
                                    Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet sem luctus in. Etiam et egestas lorem.
                                </p>
                                <ul className="list-disc pl-10">
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                    <li>Lorem ipsum dolor sit amet consectetur</li>
                                </ul>

                                <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RulesReg;