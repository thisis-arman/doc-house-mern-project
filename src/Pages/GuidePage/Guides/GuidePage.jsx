import { Link } from "react-router-dom";


const GuidePage = () => {
    return (
        <section className="grid relative md:top-36  md:mb-40 lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 py-3 grid-cols-1 container mx-auto">
            <Link to="/guides/kidney-guideline" className="block border p-4">
                <img alt="Plans" src="https://img.freepik.com/free-vector/human-internal-organ-with-kidney_1308-108805.jpg?w=740&t=st=1697301937~exp=1697302537~hmac=8d1deebf72b9794c351ab2e17b89c985fa2f076e91164af4d22857d8ae13999e" className="h-56 w-full rounded-3xl  object-cover sm:h-64 lg:h-72" />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">kidney (CKD)</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500" />
                    <p className="mt-0.5 opacity-50 sm:mt-0">Guidelines / Plans</p>
                </div>
            </Link>
            <a href="#" className="block border p-4 ">
                <img alt="Plans" src="https://img.freepik.com/free-photo/hand-holding-blood-glucose-meter-measuring-blood-sugar-background-is-stethoscope-chart-file_1387-942.jpg?w=900&t=st=1697302060~exp=1697302660~hmac=b1100bb9950a3c48aae1d2999eb3477a67e2058d665e7d5b749bf7c8f2c2641b" className="h-56 w-full rounded-3xl  object-cover sm:h-64 lg:h-72" />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Diabetes Patients Guide</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500" />
                    <p className="mt-0.5 opacity-50 sm:mt-0">Guidelines / Plans</p>
                </div>
            </a>
            <a href="#" className="block border p-4">
                <img alt="Plans" src="https://img.freepik.com/free-vector/coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg?w=1060&t=st=1697378981~exp=1697379581~hmac=976d8e23442166ddacbe7889f1dc6a32ff6686bd789ac1cc048dabee3c836a73" className="h-56 w-full rounded-3xl  object-cover sm:h-64 lg:h-72" />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Coming..</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500" />
                    <p className="mt-0.5 opacity-50 sm:mt-0">Guidelines / Routine</p>
                </div>
            </a>
            <a href="#" className="block border p-4">
                <img alt="Plans" src="https://img.freepik.com/free-vector/coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg?w=1060&t=st=1697378981~exp=1697379581~hmac=976d8e23442166ddacbe7889f1dc6a32ff6686bd789ac1cc048dabee3c836a73" className="h-56 w-full rounded-3xl  object-cover sm:h-64 lg:h-72" />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">Company Name</strong>
                    <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500" />
                    <p className="mt-0.5 opacity-50 sm:mt-0">Guidelines / Plans</p>
                </div>
            </a>





        </section>
    );
};

export default GuidePage;