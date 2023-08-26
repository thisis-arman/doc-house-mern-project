// import { home } from "../../../../doc-house Assets/Icon/home.png"
import { FaHome } from 'react-icons/fa'
import { MdOutlineLocalHospital, MdOutlinePeopleAlt } from 'react-icons/md'

const Serve = () => {
    return (
        <div className="container mx-auto px-4 relative md:top-[750px] top-[500px] mb-44">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 items-center py-12">
                <div className="md:max-w-3xl py-8 pb-12">
                    <p className="md:text-2xl text-md text-red-500 font-semibold ">What we do_</p>
                    <h2 className="sm:text-6xl text-4xl font-bold md:pt-8 pt-4">We are here to get you well</h2>
                </div>
                <div className=" gap-6">
                    <div className="flex flex-wrap py-4 gap-4">
                        <img src="https://skinive.com/wp-content/uploads/2022/11/take-care-of-skin-icon-1.svg" alt="" />
                        <img src="https://skinive.com/wp-content/uploads/2022/11/take-care-of-skin-icon-2.svg" alt="" />
                        <img src="https://skinive.com/wp-content/uploads/2022/11/take-care-of-skin-icon-3.svg" alt="" />
                    </div>
                    <p>Skinive Apps are CE-Marked medical software trusted by dermatologists and being used by people at home and by professionals in primary care all around the world.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
                <div className="rounded-3xl shadow-xl px-8 pt-10 pb-20 bg-gradient-to-t from-[#F96320] to-[#fa8e5c]">
                    {/* <img className="w-24  p-6 text-yellow-500 rounded-md bg-white" src="https://i.ibb.co/R3L2HJz/home-1.png" alt="" /> */}
                    <FaHome className="w-24 h-20  p-4 mb-4 text-[#F96320] rounded-xl bg-white" />
                    <div className='text-white'>
                        <h2 className='text-3xl py-2 text-white font-bold'>Home Use</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
                <div className="rounded-3xl shadow-xl px-8 pt-10 pb-20 bg-gradient-to-t from-[#7a8ded] to-[#5066f0]">
                    {/* <img className="w-24  p-6 text-yellow-500 rounded-md bg-white" src="https://i.ibb.co/R3L2HJz/home-1.png" alt="" /> */}
                    <MdOutlineLocalHospital className="w-24 h-20  p-4 mb-4 text-[#7a8ded] rounded-xl bg-white" />
                    <div className='text-white'>
                        <h2 className='text-3xl py-2 text-white font-bold'>Medical Professionals Use</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>
                <div className="rounded-3xl shadow-xl px-8 pt-10 pb-20 bg-gradient-to-t from-[#8362ed] to-[#a171ee]">
                    {/* <img className="w-24  p-6 text-yellow-500 rounded-md bg-white" src="https://i.ibb.co/R3L2HJz/home-1.png" alt="" /> */}
                    <MdOutlinePeopleAlt className="w-24 h-20  p-4 mb-4 text-[#8362ed] rounded-xl bg-white" />
                    <div className='text-white'>
                        <h2 className='text-3xl py-2 text-white font-bold'>Patients Use</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                </div>






            </div>

        </div>
    );
};

export default Serve;