import { FaHome, FaUsers } from "react-icons/fa";


const Features = () => {
    return (
        <section className="container mx-auto px-6  relative md:top-[750px] top-[500px] mb-44 ">
            <div className="md:flex items-start justify-center gap-10">
                <div className="md:w-1/2">
                    <img src="https://skinive.com/wp-content/uploads/2023/02/key-features-item-one-image_big.png" alt="" />
                </div>
                <div className="md:w-1/2 items-start">
                    <h2 className="sm:text-7xl text-5xl font-bold py-12">Key Feature</h2>
                    <div>
                        <div className="md:flex gap-6 py-6 items-center">
                            <FaHome className="min-w-min h-20 rounded-md p-4  bg-red-500 text-white" />
                            <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, cum!,, amet consectetur adipisicing elit. Quisquam, cum</p>
                        </div>
                        <div className="md:flex py-8 gap-6 items-center">
                            <FaHome className="min-w-min h-20 rounded-md px-2 py-2  bg-red-500 text-white" />
                            <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, cum!,, amet consectetur adipisicing elit. Quisquam, cum</p>
                        </div>
                        <div className="md:flex py-6 gap-6 items-center">
                            <FaHome className="min-w-min h-20 rounded-md p-4  bg-red-500 text-white" />
                            <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, cum!,, amet consectetur adipisicing elit. Quisquam, cum </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Features;