import { useLoaderData } from "react-router-dom";

import PageCover from "../../Components/PageCover";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from 'framer-motion'


const NewDoctorDetails = () => {
    const details = useLoaderData()
    const [services, setService] = useState([])
    const { user } = useContext(AuthContext)
    console.log(details)
    useEffect(() => {
        fetch(`http://localhost:5000/api/services/${user.email}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [user])

    // const { profile, overview, education, awards, services } = details;
    return (
        <div>
            <PageCover pageName='Details/Appointment ' />


            <div className="container mx-auto  relative py-24  md:top-[250px] md:mb-[300px] ">
                <div className="grid md:grid-cols-2 gap-10 ">
                    {
                        services.map((service, i) =>

                            <motion.div whileHover={{ scale: 1.1 }} key={i}
                                href="#"
                                className="relative shadow-sm block overflow-hidden rounded-lg border  border-gray-100 p-4 sm:p-6 lg:p-8"
                            >
                                <span
                                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r hover:from-green-300 from-green-500 hover:via-blue-500 via-blue-300 hover:to-purple-600 to-purple-400"
                                ></span>

                                <div className="sm:flex sm:justify-between sm:gap-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                            {service?.serviceName}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-gray-600">By {user?.displayName}</p>
                                    </div>

                                    <div className="hidden sm:block sm:shrink-0">
                                        <img
                                            alt="Paul Clapton"
                                            src={service?.image}
                                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="max-w-[40ch] text-sm text-gray-500">
                                        {service?.details}
                                    </p>
                                </div>

                                <dl className="mt-6 flex gap-4 sm:gap-6">
                                    <div className="flex flex-col-reverse">
                                        <dt className="text-sm font-medium text-gray-600">${service?.consultFee}</dt>
                                        <dd className="text-xs text-gray-500">Fee</dd>
                                    </div>

                                    <div className="flex flex-col-reverse">
                                        <dt className="text-sm font-medium text-gray-600">{service?.doctorEmail}</dt>
                                        <dd className="text-xs text-gray-500">Email</dd>
                                    </div>
                                </dl>
                            </motion.div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default NewDoctorDetails;

