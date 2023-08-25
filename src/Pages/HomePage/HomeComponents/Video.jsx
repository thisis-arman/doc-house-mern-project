

const Video = () => {
    return (
        <section className="container mx-auto px-4">
            <div className="relative md:top-[650px] top-0">
                <div className="md:max-w-4xl py-8 pb-12">
                    <p className="text-lg text-red-500 font-semibold ">Perfect Life made easy</p>
                    <h2 className="sm:text-6xl text-4xl font-bold">Start your journey
                        to healthy & beautiful skin</h2>
                </div>
                <div>
                    <iframe className="rounded-2xl w-2/3 h-96 mx-auto" src="https://www.youtube.com/embed/KmYm6zphh_A?si=4eHT4pNxQ5rgl02_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>
        </section>
    );
};

export default Video;