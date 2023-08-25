import { LazyMotion, domAnimation, m } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


const CaseStudies = () => {
    return (

        <LazyMotion features={domAnimation}>
            <m.div animate={{ opacity: 5 }} >

                <section className="container mx-auto my-16 p-4">
                    <div>
                        <header className="text-left py-6">
                            <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed once, initially
                                        'Case Studies',
                                        1000,
                                        'Research Paper',
                                        1000,

                                    ]}
                                    speed={50}
                                    style={{ fontSize: '1em' }}
                                    repeat={Infinity}
                                />
                            </h2>

                            <p className="max-w-md  mt-4 text-gray-500">
                                Gather Knowledge From real-life experiments, and researchers
                            </p>
                        </header>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article
                            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                        >
                            <img
                                alt="Office"
                                src="https://img.freepik.com/free-photo/scientist-putting-blood-sample-from-test-tube-with-micropipette-petri-dish-analysing-chemical-reaction_482257-487.jpg?w=1060&t=st=1692955781~exp=1692956381~hmac=1ec3171f9e0ce51c5268226c922318558b63f22168b4eb0784c7afed8b4aeadc"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div
                                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                            >
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90">
                                        10th Oct 2022
                                    </time>

                                    <Link to="https://www.bmj.com/content/382/bmj-2022-074520">
                                        <h3 className="mt-0.5 text-lg text-white">
                                            Cancer mortality after low dose exposure to ionising radiation
                                        </h3>
                                    </Link>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        The study included 103 553 deaths, of which 28 089 were due to solid cancers. The estimated rate of mortality due to solid cancer increased with cumulative dose by 52% (90% confidence interval 27% to 77%) per Gy, lagged by 10 years.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article
                            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                        >
                            <img
                                alt="Office"
                                src="https://img.freepik.com/free-photo/biotechnology-specialist-laboratory-conducting-experiments_23-2150468692.jpg?w=900&t=st=1692955965~exp=1692956565~hmac=deb854336ef2458df38d75daa89a762234cd0299916be919adbed977e5d4dc72"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div
                                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                            >
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90">
                                        20th Oct 2023
                                    </time>

                                    <Link to="https://www.bmj.com/content/382/bmj-2022-074258">
                                        <h3 className="mt-0.5 text-lg text-white">
                                            Effect of home cook interventions for salt reduction in China
                                        </h3>
                                    </Link>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        1576 participants (775 (49.2%) men; mean age 55.8 (standard deviation 10.8) years) from 788 families (one home cook and one other adult in each family) completed the baseline assessment. After baseline assessment, 30 communities with 786 participants were allocated to the intervention group and 30 communities with 790 participants to the control group.
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article
                            className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
                        >
                            <img
                                alt="Office"
                                src="https://img.freepik.com/free-photo/groupe-researchers-pharmacology-hospital-laboratory-modern-equipment-research-laboratory_482257-34686.jpg?w=900&t=st=1692956292~exp=1692956892~hmac=940a4ea54dd6d41f8913a42b6b0132a9dd9d0b4992c7b651e5fa397839614154"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            <div
                                className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
                            >
                                <div className="p-4 sm:p-6">
                                    <time datetime="2022-10-10" className="block text-xs text-white/90">
                                        22th june 2023
                                    </time>

                                    <Link to="https://www.bmj.com/content/381/bmj-2023-075230">
                                        <h3 className="mt-0.5 text-lg text-white">
                                            Vitamin D supplementation and major cardiovascular events
                                        </h3>
                                    </Link>

                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                        21 302 people were included in the analysis. The median intervention period was five years. 1336 participants experienced a major cardiovascular event (placebo 699 (6.6%); vitamin D 637 (6.0%)). The rate of major cardiovascular events was lower in the vitamin D group than in the placebo group
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </m.div>

        </LazyMotion>

    );
};

export default CaseStudies;