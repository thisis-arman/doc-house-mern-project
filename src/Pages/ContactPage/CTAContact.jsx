

const CTAContact = () => {
    return (
        <div>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section
                className="overflow-hidden bg-[url(https://img.freepik.com/free-vector/hand-drawn-flat-world-aids-day-background_52683-75184.jpg?w=900&t=st=1692422593~exp=1692423193~hmac=753daa40bbb5a79d393ba2a33c0b9ee64b1a19e2cb553aa9cefab50fd7003c58)] bg-cover bg-bottom bg-no-repeat"
            >
                <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="text-center sm:text-left ">
                        <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                            Latest Articles
                        </h2>

                        <p
                            className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
                            officia corporis quasi doloribus iure architecto quae voluptatum beatae
                            excepturi dolores.
                        </p>

                        <div className="mt-4 sm:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CTAContact;